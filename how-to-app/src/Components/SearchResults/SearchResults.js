import React from 'react'

import HowToCardList from '../Dashboard-page/HowToCardList';
import { Segment } from 'semantic-ui-react';

const SearchResults = () => {

  const guides = JSON.parse(localStorage.guides)


  return (
    <Segment>
      <div className='search_res'>{`${guides.length} guides contain the word ${localStorage.searchTerm}`}</div>
      <HowToCardList rows={1} />
    </Segment>
  )
}

export default SearchResults
