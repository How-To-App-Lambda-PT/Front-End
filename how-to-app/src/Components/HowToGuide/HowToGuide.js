import React, { useEffect, useState } from 'react'
import { Segment, Header, Card, Container, Embed } from 'semantic-ui-react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    margin: '80px',
  },
}

const HowToGuide = () => {

  const id = localStorage.guideId

  const [guide, setGuide] = useState()

  useEffect(() => { 
    axiosWithAuth('get', `https://bw-how-to.herokuapp.com/guides/${id}`)
      .then(res => setGuide(res.data[0]))
      .catch(err => console.log('HowToGuide: useEffect: GET:', err))
  }, [])

  if (!guide) {
    return (
      <div>Loading ...</div>
    )
  }

  const stepArr = () => {
    let arr = []
    for (let key in guide) {
      if (key.toString().includes('step')) {
        arr.push(key)
      }
    }
    return arr
  }

  const steps = stepArr().map(step => {
    const titleNumber = step.split('_')[1]
    return (
      <Card
        key={titleNumber}
        header={`Step ${titleNumber}`}
        description={guide[`${step}`]}
      />
    )
  })

  const videoLink = guide.link || ''
  
  const videoId = videoLink.split('=')[1] || ''

  const videoPlayer = (
    <Embed
      style={style.last}
      id={videoId}
      source='youtube'
      autoplay={true}
      brandedUI
    />
  )



  return (
    <Segment>
      <Container>
        <Header as='h1' style={style.h1} textAlign='center' content={guide.title} />
        <Header as='h3' style={style.h3} textAlign='center' content={guide.description} />
        <Card.Group itemsPerRow={1}>
          {steps}
        </Card.Group>
      </Container>
      <Container>
        {videoPlayer || 'No Video Available'}
      </Container>
    </Segment>
  )

}

export default HowToGuide
