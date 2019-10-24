import React from 'react'

import SearchField from './SearchField';
import HowToCardList from '../Dashboard-page/HowToCardList';
import { Segment, Header } from 'semantic-ui-react';

const SearchResults = () => {

  return (
    <Segment>
      <HowToCardList rows={1}/>
    </Segment>
  )
}

export default SearchResults
