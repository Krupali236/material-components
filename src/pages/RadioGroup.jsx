import React from "react";
import RadioButtonsGroup from "../components/Input/RadioGroup/RadioButtonGeroup";
import ControlledRadioButtonsGroup from "../components/Input/RadioGroup/ControlledRadioButtonGroup";
import StandaloneRadioButtons from "../components/Input/RadioGroup/StandaloneRadioButtons";
import SizeRadioButtons from "../components/Input/RadioGroup/RadioGroupSize";
import ColorRadioButtons from "../components/Input/RadioGroup/ColorRadioButtons";
import FormControlLabelPlacement from "../components/Input/RadioGroup/LabelPlacementRadioButton";
import ErrorRadios from "../components/Input/RadioGroup/ErrorRadioButton";
import CustomizedRadios from "../components/Input/RadioGroup/CustomizedRadioButton";

const RadioGroup = () => {
  return (
    <div style={{ margin: "15px" }}>
      <RadioButtonsGroup />
      <ControlledRadioButtonsGroup />
      <StandaloneRadioButtons />
      <SizeRadioButtons />
      <ColorRadioButtons />
      <FormControlLabelPlacement />
      <ErrorRadios />
      <CustomizedRadios />
    </div>
  );
};

export default RadioGroup;
