import React from "react";
import BasicTooltip from "../components/DataDisplay/Tooltip/BasicTooltip";
import PositionedTooltips from "../components/DataDisplay/Tooltip/PositionedTooltips";
import CustomizedTooltips from "../components/DataDisplay/Tooltip/CustomizedTooltips";
import TriggersTooltips from "../components/DataDisplay/Tooltip/TriggersTooltips";
import ControlledTooltips from "../components/DataDisplay/Tooltip/ControlledTooltips";
import VariableWidth from "../components/DataDisplay/Tooltip/VariableWidth";
import NonInteractiveTooltips from "../components/DataDisplay/Tooltip/NonInteractiveTooltips";

const Tooltip = () => {
  return (
    <div style={{margin:"15px"}}>
      <BasicTooltip />
      <PositionedTooltips />
      <CustomizedTooltips />
      <TriggersTooltips />
      <ControlledTooltips />
      <VariableWidth />
      <NonInteractiveTooltips />
    </div>
  );
};

export default Tooltip;
