import React from "react";
import BasicSpeedDial from "../components/Navigation/SpeedDial/BasicSpeedDial";
import PlaygroundSpeedDial from "../components/Navigation/SpeedDial/PlaygroundSpeedDial";
import ControlledOpenSpeedDial from "../components/Navigation/SpeedDial/ControlledOpenSpeedDial";
import OpenIconSpeedDial from "../components/Navigation/SpeedDial/OpenIconSpeedDial";
import SpeedDialTooltipOpen from "../components/Navigation/SpeedDial/SpeedDialTooltipOpen";

const SpeedDial = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicSpeedDial />
      <PlaygroundSpeedDial />
      <ControlledOpenSpeedDial />
      <OpenIconSpeedDial/>
      <SpeedDialTooltipOpen/>
    </div>
  );
};

export default SpeedDial;
