import React from "react";
import BasicButtons from "../components/Input/Button/BasicButton";
import TextButtons from "../components/Input/Button/TextButton";
import ContainedButtons from "../components/Input/Button/ContainedButton";
import DisableElevation from "../components/Input/Button/DisableElevation";
import OutlinedButtons from "../components/Input/Button/OutlinedButton";
import ColorButtons from "../components/Input/Button/ColorButton";
import ButtonSizes from "../components/Input/Button/ButtonSizes";
import IconLabelButtons from "../components/Input/Button/IconLabelButtons";
import IconButtons from "../components/Input/Button/IconButton";
import IconButtonSizes from "../components/Input/Button/IconButtonSizes";
import IconButtonColors from "../components/Input/Button/IconButtonColors";
import LoadingIconButton from "../components/Input/Button/Loading";
import IconButtonWithBadge from "../components/Input/Button/IconButtonBadge";
import InputFileUpload from "../components/Input/Button/FileUpload";
import LoadingButtons from "../components/Input/Button/LoadingButtons";
import LoadingButtonsTransition from "../components/Input/Button/LoadingButtonTransition";
import ButtonBaseDemo from "../components/Input/Button/ButtonBaseImage";

const Button = () => {
  return (
    <div style={{ margin: "15px"}}>
      <BasicButtons />
      <TextButtons />
      <ContainedButtons />
      <DisableElevation />
      <OutlinedButtons />
      <ColorButtons />
      <ButtonSizes />
      <IconLabelButtons />
      <IconButtons />
      <IconButtonSizes />
      <IconButtonColors />
      <LoadingIconButton />
      <IconButtonWithBadge />
      <InputFileUpload />
      <LoadingButtons />
      <LoadingButtonsTransition />
      <ButtonBaseDemo/>
    </div>
  );
};

export default Button;
