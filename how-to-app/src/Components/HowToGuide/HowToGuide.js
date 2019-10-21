import React, { useEffect } from 'react'
import { Segment } from 'semantic-ui-react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const HowToGuide = () => {

  const id = localStorage.guideId

  useEffect(() { 
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/`)
  }, [])
}