import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { GuidesContext } from "../../contexts/index";
import HowToCard from "./HowToCard";

const HowToCardList = () => {
  const [guides] = useContext(GuidesContext);

  const guidesList = () => {
    return (
      guides.map(guide => {
        return <HowToCard
          key={guide.id}
          title={guide.title}
          steps={guide.description}
          id={guide.id}
        />;        
      })
    );
  };

  if (!guides) {
    return (
      <div>Loading ..</div>
    )
  }

  return <Card.Group itemsPerRow={3}>{guidesList()}</Card.Group>;
};

export default HowToCardList;
