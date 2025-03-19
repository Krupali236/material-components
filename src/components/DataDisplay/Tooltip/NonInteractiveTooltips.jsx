import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function NonInteractiveTooltips() {
  return (
    <div>
      <h3>Interactive</h3>
      <Tooltip title="Add" disableInteractive>
        <Button>Not interactive</Button>
      </Tooltip>
    </div>
  );
}
