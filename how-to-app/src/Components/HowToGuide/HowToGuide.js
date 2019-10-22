import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const HowToGuide = () => {

  const id = localStorage.guideId

  const [guide, setGuide] = useState();

  useEffect(() => { 
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides/${id}`)
      .then(res => setGuide(res.data))
      .catch(err => console.log('HowToGuide: useEffect: GET:', err))
  }, [])

  if (!guide) {
    return (
      <div>Loading ...</div>
    )
  }

  return (
    <div>{guide[0].title}</div>
  )

}

export default HowToGuide
