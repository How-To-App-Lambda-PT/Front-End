import React, { useContext, useState } from 'react'
import { Form, Segment, Card } from 'semantic-ui-react'

import { useFormInput } from '../utils/hooks';
import { GuidesContext } from '../contexts/index';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SearchField = () => {

  const [guides, setGuides] = useContext(GuidesContext)

  const [filters, setFilters] = useState([]);

  const initialValues = {
    searchValue: '',
    searchResults: guides
  }

  const filterValues = (
    <ul>
      {
        filters.map(item =>
          <li key={item}>{item}</li>)
      }
    </ul>
  )

  const filterList = (
    <Card
      header='Filters:'
      description={filterValues}
    />
  )

  const [values, changeHandler, resetForm] = useFormInput(initialValues)

  const searchHandler = () => {
    setFilters([...filters, values.searchValue])
    const filteredResults = guides.filter(guide => guide.title.includes(values.searchValue))
    setGuides(filteredResults)
    resetForm()
  }

  const resetHandler = () => {
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides`)
    .then(res => {
      console.log('SearchField: resetHandler: GET:', res.data)
      setGuides(res.data)
      setFilters([])
    })
    .catch(err => console.log('SearchField: resetHandler: GET:', err))
  }

  return (
    <Segment>
      <Form
        onSubmit={searchHandler}
      >
        <Form.Input
          fluid
          label='Search'
          name='searchValue'
          placeholder='Search'
          value={values.searchValue}
          onChange={changeHandler}
        />
        <Form.Button>Search Guides</Form.Button>
      </Form>
      <Form
        onSubmit={resetHandler}
      >
        {filterList}
        <Form.Button>Reset Search</Form.Button>
      </Form>
    </Segment>
  )
}

export default SearchField
