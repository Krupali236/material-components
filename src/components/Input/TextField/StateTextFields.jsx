import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function StateTextFields() {
  const [name, setName] = React.useState("Cat in the Hat");

  return (
    <div>
      <h3>Uncontrolled vs. Controlled</h3>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="Controlled"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
        />
      </Box>
    </div>
  );
}
