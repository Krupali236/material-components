import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function RedBar() {
  return (
    <Box
      sx={(theme) => ({
        height: 20,
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        ...theme.applyStyles("dark", {
          backgroundColor: "rgb(255 132 132 / 25%)",
        }),
      })}
    />
  );
}

export default function LayoutTextFields() {
  return (
    <div>
      <h3>Margin</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { width: "25ch" },
        }}
      >
        <RedBar />
        <TextField label={'margin="none"'} id="margin-none" />
        <RedBar />
        <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
        <RedBar />
        <TextField
          label={'margin="normal"'}
          id="margin-normal"
          margin="normal"
        />
        <RedBar />
      </Box>

      <h3>Full width</h3>
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </Box>
    </div>
  );
}
