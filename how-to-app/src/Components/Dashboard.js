import React, { useContext } from 'react'
import { UserContext } from '../contexts/index';
import HowToCardList from './HowToCardList';
import SearchField from './SearchField';

const Dashboard = () => {

  const [user] = useContext(UserContext)

  console.log('User component:', user)

  return (
    <>
      <div>User</div>
      <SearchField />
      <HowToCardList />
    </>
  )
}

export default Dashboard