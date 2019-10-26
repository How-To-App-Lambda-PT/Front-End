import React, { useContext } from 'react'
import { Form } from 'semantic-ui-react'

import { useFormInput } from '../../utils/hooks';
import { GuidesContext } from '../../contexts/index';

const SearchField = props => {

  const [guides, setGuides] = useContext(GuidesContext)

  const initialValues = {
    searchValue: '',
    searchResults: guides
  }

  const [values, changeHandler] = useFormInput(initialValues)

  const searchHandler = () => {

    const filteredResults = guides.filter(guide => guide.title.includes(values.searchValue))

    setGuides(filteredResults)

    localStorage.setItem('searchTerm', values.searchValue)
    localStorage.setItem('guides', JSON.stringify(filteredResults))
    console.log('SearchField: searchHandler: filteredResults=', filteredResults)
    props.history.push('/searchresults')
  }

  return (
    <Form onSubmit={searchHandler}>
        <Form.Input
          onSubmit={searchHandler}
          fluid
          name='searchValue'
          placeholder='Search'
          value={values.searchValue}
          onChange={changeHandler}
          icon="search"
          iconPosition='left'

        />
        </Form>
  )
}

export default SearchField
