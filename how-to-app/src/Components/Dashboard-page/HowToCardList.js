import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { GuidesContext } from "../../contexts/index";
import HowToCard from "./HowToCard";

const HowToCardList = props => {
  const [guides] = useContext(GuidesContext);
  // console.log('HowToCardList:', guides)
  const guidesList = () => {
    return (
      guides.map((guide, i) => {
        return <HowToCard
          i={i}
          key={guide.id} 
          guide={guide}
          type={'searchResult'}
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
