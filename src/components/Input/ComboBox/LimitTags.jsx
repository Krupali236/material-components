import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import top100Films from "./top100films";
export default function LimitTags() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Limit Tags</h3>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={top100Films}
        getOptionLabel={(option) => option.label}
        defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} label="limitTags" placeholder="Favorites" />
        )}
        sx={{ width: "500px", maxWidth: 300 }}
      />
    </div>
  );
}
