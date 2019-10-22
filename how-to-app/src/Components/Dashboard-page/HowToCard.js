import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const HowToCard = props => {

  const linkHandler = () => {
    localStorage.setItem('guideId', props.id)
  }

  return (
    <Card
      header={props.title}
      description={props.steps}
      to={`/guides/${props.id}`}
      as={Link}
      onClick={linkHandler}
    />
  )
}

export default HowToCard