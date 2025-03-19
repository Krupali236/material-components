import React from "react";
import ToggleButtons from "../components/Input/ToggleButton/ToggleButtons";
import ToggleButtonsMultiple from "../components/Input/ToggleButton/ToggleButtonsMultiple";
import ToggleButtonSizes from "../components/Input/ToggleButton/ToggleButtonSizes";
import ColorToggleButton from "../components/Input/ToggleButton/ColorToggleButton";
import ToggleButtonNotEmpty from "../components/Input/ToggleButton/ToggleButtonNotEmpty";
import StandaloneToggleButton from "../components/Input/ToggleButton/StandaloneToggleButton";
import CustomizedDividers from "../components/Input/ToggleButton/CustomizedDividers";

const ToggleButton = () => {
  return (
    <div style={{ margin: "15px" }}>
      <ToggleButtons />
      <ToggleButtonsMultiple />
      <ToggleButtonSizes />
      <ColorToggleButton />
      <ToggleButtonNotEmpty />
      <StandaloneToggleButton />
      <CustomizedDividers />
    </div>
  );
};

export default ToggleButton;
