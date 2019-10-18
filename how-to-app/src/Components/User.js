import React, { useContext } from 'react'
import { UserContext } from '../contexts/index';

const User = () => {

  const [user] = useContext(UserContext)

  console.log('User component:', user)

  return (
    <div>User</div>
  )
}

export default User