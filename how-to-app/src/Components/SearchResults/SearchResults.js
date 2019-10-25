import React, { useContext } from 'react'

import HowToCardList from '../Dashboard-page/HowToCardList';
import { Segment, Header } from 'semantic-ui-react';
import { GuidesProvider } from '../../contexts';

const SearchResults = () => {

  // const [guides] = useContext(GuidesProvider)

  const guides = JSON.parse(localStorage.guides)

  return (
    <Segment>
      <div>{`${guides.length} guides contain the word ${localStorage.searchTerm}`}</div>
      <HowToCardList />
    </Segment>
  )
}

export default SearchResults
