import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { GuidesContext } from "../../contexts/index";
import HowToCard from "./HowToCard";

const HowToCardList = props => {
  const [guides] = useContext(GuidesContext);
  // console.log('HowToCardList:', guides)
  const guidesList = () => {
    return (
      guides.map(guide => {
        return <HowToCard
<<<<<<< HEAD
          key={guide.id} 
          guide={guide}
          type={'searchResult'}
=======
          key={guide.id}
          title={guide.title}
          description={guide.description}
          id={guide.id}
>>>>>>> 5c0296506929da711af0c85b23ffdfbc452d1faf
        />;        
      })
    );
  };

  if (!guides) {
    return (
      <div>Loading ..</div>
    )
  }

  return <Card.Group itemsPerRow={props.rows}>{guidesList()}</Card.Group>;
};

export default HowToCardList;
