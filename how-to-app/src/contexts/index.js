import React, { createContext, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const UserContext = createContext()

export const UserProvider = props => {
  const [user, setUser] = useState({})

  // if (localStorage.token) {
  //   axiosWithAuth('get', `https://bw-how-to.heorkuapp.com/users/${localStorage.id}`)
  //     .then(res => setUser(res.data))
  //     .catch(err => console.log('contexts: index: UserProvider: GET:', err))
  // }
  return (
    <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>
  )
}

export const GuidesContext = createContext()

export const GuidesProvider = props => {
  const [guides, setGuides] = useState({})

  if (localStorage.token) {
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides`)
      .then(res => setGuides(res.data))
  }
  return (
    <GuidesContext.Provider value={[guides, setGuides]}>{props.children}</GuidesContext.Provider>
  )
}