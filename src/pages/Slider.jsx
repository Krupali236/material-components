import React from "react";
import ContinuousSlider from "../components/Input/Slider/ContinuousSlider";
import SliderSizes from "../components/Input/Slider/SliderSizes";
import DiscreteSliderSteps from "../components/Input/Slider/DiscreteSliderSteps";
import RangeSlider from "../components/Input/Slider/RangeSlider";
import InputSlider from "../components/Input/Slider/InputSlider";
import CustomizedSlider from "../components/Input/Slider/CustomizedSlider";
import MusicPlayerSlider from "../components/Input/Slider/MusicPlayerSlider";
import VerticalSlider from "../components/Input/Slider/VerticalSlider";
import CustomMarks from "../components/Input/Slider/CustomMarksSlider";
import TrackFalseSlider from "../components/Input/Slider/TrackSlider";
import NonLinearSlider from "../components/Input/Slider/NonLinearSlider";

const Slider = () => {
  return (
    <div style={{ margin: "15px" }}>
      <ContinuousSlider />
      <SliderSizes />
      <DiscreteSliderSteps />
      <RangeSlider />
      <InputSlider />
      <CustomizedSlider />
      <MusicPlayerSlider />
      <VerticalSlider />
      <CustomMarks />
      <TrackFalseSlider />
      <NonLinearSlider />
    </div>
  );
};

export default Slider;
