import React from "react";
import Checkboxes from "../components/Input/Checkbox/BasicCheckbox";
import CheckboxLabels from "../components/Input/Checkbox/CheckboxLabel";
import SizeCheckboxes from "../components/Input/Checkbox/SizesCheckbox";
import ColorCheckboxes from "../components/Input/Checkbox/ColorCheckbox";
import IconCheckboxes from "../components/Input/Checkbox/IconCheckbox";
import ControlledCheckbox from "../components/Input/Checkbox/ControlledCheckbox";
import IndeterminateCheckbox from "../components/Input/Checkbox/IndeterminateCheckbox";
import CheckboxesGroup from "../components/Input/Checkbox/CheckboxGroup";
import FormControlLabelPosition from "../components/Input/Checkbox/CheckboxLabelPosition";
import CustomizedCheckbox from "../components/Input/Checkbox/CustomizedCheckbox";

const Checkbox = () => {
  return (
    <div style={{ margin: "15px" }}>
      <Checkboxes />
      <CheckboxLabels />
      <SizeCheckboxes />
      <ColorCheckboxes />
      <IconCheckboxes />
      <ControlledCheckbox />
      <IndeterminateCheckbox />
      <CheckboxesGroup />
      <FormControlLabelPosition />
      <CustomizedCheckbox />
    </div>
  );
};

export default Checkbox;
