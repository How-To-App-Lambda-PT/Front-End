import React, { useEffect, useState, useContext } from "react";
import { Segment, Header, Card, Container, Embed, Button } from "semantic-ui-react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { UserContext } from '../../contexts/index';

const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    margin: "80px"
  }
};


const HowToGuide = props => {
  let id = props.match.params.id;
  console.log(props.match.params.id)
  
  const [guide, setGuide] = useState();

  const [user] = useContext(UserContext)

  useEffect(() => {
    axiosWithAuth("get", `https://bw-how-to.herokuapp.com/guides/${id}`)
      .then(res => {
        console.log('HowTo:', res.data)
        setGuide(res.data[0])
      })
      .catch(err => console.log("HowToGuide: useEffect: GET:", err));
  }, []);

  if (!guide) {
    return <div>Loading ...</div>;
  }

  const stepArr = () => {
    let arr =[]
    for (let key in guide) {
      if (key.toString().includes("step") && guide[key] !== null) {
        arr.push(key);
      }
    }
    return arr;
  };

  const steps = stepArr().map(step => {
    const titleNumber = step.split("_")[1];
    return (
      <Card
        key={titleNumber}
        header={`Step ${titleNumber}`}
        description={guide[`${step}`]}
      />
    );
  });

  const videoLink = guide.link || "";

  const videoId = videoLink.split("=")[1] || "";

  const videoPlayer = () => {
    return (
    videoId ? <Embed
      style={style.last}
      id={videoId}
      source="youtube"
      autoplay={true}
      brandedUI
      /> : <div>Video not available</div>
    )
  };

  const deleteHowTo = () => {
    axiosWithAuth(
      "delete",
      `https://bw-how-to.herokuapp.com/guides/${guide.id}`
    )
      .then(props.history.push(`/userpagenewsfeed`))
      .catch(err => console.log(err))
  };

  return (
    <Segment style={{ padding: 0, width: '80%', maxWidth: '900px', margin: '50px auto' }}>
      <Container>
        <Header
          as="h1"
          style={style.h1}
          textAlign="center"
          content={guide.title}
        />
        <Header
          as="h3"
          style={style.h3}
          textAlign="center"
          content={guide.description}
        />
        <Card.Group itemsPerRow={1}>{steps}</Card.Group>
      </Container>
      <Container>{videoPlayer()}</Container>
      <Button
        onClick={() => props.history.push(`/editGuide/${id}`)}
        disabled={JSON.parse(user).type !== 'creator'}
      >
        Edit Guide
      </Button>
      <Button
        onClick={deleteHowTo}
        disabled={JSON.parse(user).type !== 'creator'}
      >
        Delete Guide
      </Button>
      <Button
        onClick={() => props.history.push('/userpagenewsfeed')}
      >
        Return to Newsfeed
      </Button>
    </Segment>
  );
};

export default HowToGuide;
