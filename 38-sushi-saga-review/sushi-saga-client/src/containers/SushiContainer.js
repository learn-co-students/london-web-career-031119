import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = props => {
  let renderFourSushi = () => {
    return props.fourSushi.map(sushi => (
      <Sushi
        sushi={sushi}
        key={sushi.id}
        storeEatenSushi={props.storeEatenSushi}
        budget={props.budget}
      />
    ));
  };
  return (
    <Fragment>
      <div className="belt">
        {renderFourSushi()}
        <MoreButton get4Sushi={props.get4Sushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
