import React from 'react'
import { Card } from 'semantic-ui-react'

const HowToCard = props => {

  return (
    <Card
      header={props.title}
      description={props.steps}
    />
  )
}

export default HowToCard