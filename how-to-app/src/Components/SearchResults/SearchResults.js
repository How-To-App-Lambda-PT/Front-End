import React from 'react'

import SearchField from './SearchField';
import HowToCardList from '../Dashboard-page/HowToCardList';
import { Segment, Header } from 'semantic-ui-react';

const SearchResults = () => {

  return (
    <Segment>
      <Header>Search How To's</Header>
      <SearchField />
      <HowToCardList />
    </Segment>
  )
}

export default SearchResults
