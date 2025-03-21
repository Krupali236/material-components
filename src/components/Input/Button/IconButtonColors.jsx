import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

export default function IconButtonColors() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Colors</h3>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="fingerprint" color="secondary">
          <Fingerprint />
        </IconButton>
        <IconButton aria-label="fingerprint" color="success">
          <Fingerprint />
        </IconButton>
      </Stack>
    </div>
  );
}
