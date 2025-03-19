import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./top100films";
export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <div style={{ margin: "15px" }}>
      <h3>Group Combo-box</h3>
      <Autocomplete
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.label}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="With categories" />
        )}
      />
    </div>
  );
}
