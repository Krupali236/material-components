import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

export default function DisableElevation() {
  return (
    <div>
      <h3>Disabled elevation</h3>
      <ButtonGroup
        disableElevation
        variant="contained"
        aria-label="Disabled button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </div>
  );
}
