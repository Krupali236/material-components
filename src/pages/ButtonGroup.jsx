import React from "react";
import BasicButtonGroup from "../components/Input/ButtonGroup/BasicButtonGroup";
import VariantButtonGroup from "../components/Input/ButtonGroup/VariantButtonGroup";
import GroupSizesColors from "../components/Input/ButtonGroup/GroupSizeColor";
import GroupOrientation from "../components/Input/ButtonGroup/VerticalGroup";
import SplitButton from "../components/Input/ButtonGroup/SplitButton";
import DisableElevation from "../components/Input/ButtonGroup/DisableElevation";
import LoadingButtonGroup from "../components/Input/ButtonGroup/LoadingButtonGroup";

const ButtonGroup = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicButtonGroup />
      <VariantButtonGroup />
      <GroupSizesColors />
      <GroupOrientation/>
      <SplitButton/>
      <DisableElevation />
      <LoadingButtonGroup/>
    </div>
  );
};

export default ButtonGroup;
