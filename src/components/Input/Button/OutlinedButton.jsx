import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Outline Button</h3>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Stack>
    </div>
  );
}
