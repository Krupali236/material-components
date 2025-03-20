import React from "react";
import HorizontalLinearStepper from "../components/Navigation/Stepper/HorizontalLinearStepper";
import HorizontalNonLinearStepper from "../components/Navigation/Stepper/HorizontalNonLinearStepper";
import HorizontalLinearAlternativeLabelStepper from "../components/Navigation/Stepper/HorizontalLinearAlternativeLabelStepper";
import HorizontalStepperWithError from "../components/Navigation/Stepper/HorizontalStepperWithError";
import CustomizedSteppers from "../components/Navigation/Stepper/CustomizedSteppers";
import VerticalLinearStepper from "../components/Navigation/Stepper/VerticalLinearStepper";
import TextMobileStepper from "../components/Navigation/Stepper/TextMobileStepper";
import DotsMobileStepper from "../components/Navigation/Stepper/DotsMobileStepper";
import ProgressMobileStepper from "../components/Navigation/Stepper/ProgressMobileStepper";

const Stepper = () => {
  return (
    <div style={{ margin: "15px" }}>
      <HorizontalLinearStepper />
      <HorizontalNonLinearStepper />
      <HorizontalLinearAlternativeLabelStepper />
      <HorizontalStepperWithError />
      <CustomizedSteppers />
      <VerticalLinearStepper />
      <TextMobileStepper />
      <DotsMobileStepper />
      <ProgressMobileStepper />
    </div>
  );
};

export default Stepper;
