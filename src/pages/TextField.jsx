import React from "react";
import BasicTextFields from "../components/Input/TextField/BasicTextField";
import FormPropsTextFields from "../components/Input/TextField/FormPropsTextFields";
import ValidationTextFields from "../components/Input/TextField/ValidationTextFields";
import MultilineTextFields from "../components/Input/TextField/MultilineTextFields";
import SelectTextFields from "../components/Input/TextField/SelectTextFields";
import InputWithIcon from "../components/Input/TextField/InputWithIcon";
import InputAdornments from "../components/Input/TextField/InputAdornments";
import InputSuffixShrink from "../components/Input/TextField/InputSuffixShrink";
import TextFieldSizes from "../components/Input/TextField/TextFieldSizes";
import LayoutTextFields from "../components/Input/TextField/LayoutTextFields";
import StateTextFields from "../components/Input/TextField/StateTextFields";
import ComposedTextField from "../components/Input/TextField/ComposedTextField";
import ColorTextFields from "../components/Input/TextField/ColorTextFields";
import Inputs from "../components/Input/TextField/Inputs";
import CustomizedInputsStyled from "../components/Input/TextField/CustomizedInputsStyled";
import CustomizedInputsStyleOverrides from "../components/Input/TextField/CustomizedInputsStyleOverrides";
import CustomizedInputBase from "../components/Input/TextField/CustomizedInputBase";
import UseFormControl from "./UseFormControl";
import HelperTextAligned from "../components/Input/TextField/HelperTextAligned";
import FormattedInputs from "../components/Input/TextField/FormattedInputs";

const TextField = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicTextFields />
      <FormPropsTextFields />
      <ValidationTextFields />
      <MultilineTextFields />
      <SelectTextFields />
      <InputWithIcon />
      <InputAdornments />
      <InputSuffixShrink />
      <TextFieldSizes />
      <LayoutTextFields />
      <StateTextFields />
      <ComposedTextField />
      <Inputs />
      <ColorTextFields />
      <CustomizedInputsStyled />
      <CustomizedInputsStyleOverrides />
      <CustomizedInputBase />
      <UseFormControl />
      <HelperTextAligned />
      <FormattedInputs />
    </div>
  );
};

export default TextField;
