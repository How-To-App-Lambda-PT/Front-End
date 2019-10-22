import React from 'react';
import { Card } from 'semantic-ui-react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const HowToCard = props => {
  console.log(props)


  const deleteHowTo = e => {
    
    axiosWithAuth('delete', `https://bw-how-to.herokuapp.com/guides/${props.title.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  return (
    <Card
      header={props.title}
      description={props.steps}
      />
  )
}

export default HowToCard