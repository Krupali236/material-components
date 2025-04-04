import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import top100Films from "./top100films";
export default function FixedTags() {
  const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);

  return (
    <div style={{ margin: "15px" }}>
      <h3>Fixed Options</h3>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => !fixedOptions.includes(option)),
          ]);
        }}
        options={top100Films}
        getOptionLabel={(option) => option.label}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                key={key}
                label={option.label}
                {...tagProps}
                disabled={fixedOptions.includes(option)}
              />
            );
          })
        }
        style={{ width: 500, maxWidth: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Fixed tag" placeholder="Favorites" />
        )}
      />
    </div>
  );
}
