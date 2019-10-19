import React, { useContext } from 'react'
import { Card } from 'semantic-ui-react'
import { GuidesContext } from '../contexts/index';
import HowToCard from './HowToCard';

const HowToCardList = () => {

  const [guides] = useContext(GuidesContext)

  const guidesList = () => {
    return (
      !guides ? <div>Loading ...</div>
        : guides.map(guide => {
          return (
            <HowToCard
              title={guide.title}
              steps={guide.description}
            />
          )
        })
    )
  }
  
  return (
    <Card.Group itemsPerRow={3}>
      {guidesList()}
    </Card.Group>
  )
}

export default HowToCardList