import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const HowToCard = props => {
  console.log(props)
  const guide = props.guide


  const deleteHowTo = e => {
    
    axiosWithAuth('delete', `https://bw-how-to.herokuapp.com/guides/${props.title.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  const linkHandler = () => {
    localStorage.setItem('guideId', guide.id)
  }

  return (
    <Card
      header={guide.title}
      description={guide.description}
      to={`/guides/${guide.id}`}
      as={Link}
      onClick={linkHandler}
    />
  )
}

export default HowToCard