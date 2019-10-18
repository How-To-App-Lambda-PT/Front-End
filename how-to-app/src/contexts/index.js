import React, { useEffect, createContext, useState } from 'react'
import { axiosWithAuth } from '../../axiosWithAuth';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';

export const UserContext = createContext()

export const UserProvider = props => {
  const [user, setUser] = useState({})

  if (localStaorage.token) {
    useEffect(() => {
      axiosWithAuth('get', 'http')
    }, [])
  }
}
