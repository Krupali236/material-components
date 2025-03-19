import * as React from "react";
import Button from "@mui/material/Button";

export default function DisableElevation() {
  return (
    <div style={{margin:"15px"}}>
      <h3>Disable elevation</h3>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </div>
  );
}
