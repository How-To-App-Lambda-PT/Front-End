import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import { GuidesContext } from "../../contexts/index";
import HowToCard from "./HowToCard";

const HowToCardList = props => {
  const [guides] = useContext(GuidesContext);
  // console.log('HowToCardList:', guides)
  const guidesList = () => {
    return (
      guides.map((guide) => {
        return (
        // <Link to={`/guides/${guide.id}`}>
        <HowToCard
          // i={i}
          key={guide.id} 
          guide={guide}
          type={'searchResult'}
        /> 
        // </Link> 
        )

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
