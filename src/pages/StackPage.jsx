import React from "react";
import BasicStack from "../components/Layout/Stack/BasicStack";
import DirectionStack from "../components/Layout/Stack/DirectionStack";
import DividerStack from "../components/Layout/Stack/DividerStack";
import ResponsiveStack from "../components/Layout/Stack/ResponsiveStack";
import FlexboxGapStack from "../components/Layout/Stack/FlexboxGapStack";
import ZeroWidthStack from "../components/Layout/Stack/ZeroWidthStack";

const StackPage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicStack />
      <DirectionStack />
      <DividerStack />
      <ResponsiveStack />
      <FlexboxGapStack />
      <ZeroWidthStack />
    </div>
  );
};

export default StackPage;
