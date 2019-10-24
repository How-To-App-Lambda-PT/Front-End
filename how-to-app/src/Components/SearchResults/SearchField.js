import React, { useContext, useState } from 'react'
import { Form, Segment } from 'semantic-ui-react'

import { useFormInput } from '../../utils/hooks';
import { GuidesContext } from '../../contexts/index';

const SearchField = props => {

  const [guides, setGuides] = useContext(GuidesContext)

  const [filters, setFilters] = useState([]);

  const initialValues = {
    searchValue: '',
    searchResults: guides
  }

  const [values, changeHandler] = useFormInput(initialValues)

  const searchHandler = () => {
    setFilters([...filters, values.searchValue])
    const filteredResults = guides.filter(guide => guide.title.includes(values.searchValue))
    setGuides(filteredResults)
    props.history.push('/searchresults')
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
    </Segment>
  )
}

export default SearchField
