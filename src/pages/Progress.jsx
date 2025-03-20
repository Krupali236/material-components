import React from "react";
import CircularIndeterminate from "../components/Feedback/Progress/CircularIndeterminate";
import CircularWithValueLabel from "../components/Feedback/Progress/CircularWithValueLabel";
import LinearIndeterminate from "../components/Feedback/Progress/LinearIndeterminate";
import LinearBuffer from "../components/Feedback/Progress/LinearBuffer";
import LinearWithValueLabel from "../components/Feedback/Progress/LinearWithValueLabel";
import CustomizedProgressBars from "../components/Feedback/Progress/CustomizedProgressBars";
import DelayingAppearance from "../components/Feedback/Progress/DelayingAppearance";

const Progress = () => {
  return (
    <div style={{ margin: "15px" }}>
      <CircularIndeterminate />
      <CircularWithValueLabel />
      <LinearIndeterminate />
      <LinearBuffer />
      <LinearWithValueLabel />
      <CustomizedProgressBars />
      <DelayingAppearance />
    </div>
  );
};

export default Progress;
