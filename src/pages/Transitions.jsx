import React from "react";
import SimpleCollapse from "../components/Utils/Transitions/SimpleCollapse";
import SimpleFade from "../components/Utils/Transitions/SimpleFade";
import SimpleGrow from "../components/Utils/Transitions/SimpleGrow";
import SimpleSlide from "../components/Utils/Transitions/SimpleSlide";
import SlideFromContainer from "../components/Utils/Transitions/SlideFromContainer";
import SimpleZoom from "../components/Utils/Transitions/SimpleZoom";
import TransitionGroupExample from "../components/Utils/Transitions/TransitionGroupExample";

const Transitions = () => {
  return (
    <div style={{margin:"15px"}}>
      <SimpleCollapse />
      <SimpleFade />
      <SimpleGrow />
      <SimpleSlide />
      <SlideFromContainer />
      <SimpleZoom />
      <TransitionGroupExample />
    </div>
  );
};

export default Transitions;
