import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import top100Films from "./top100films";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Checkboxes</h3>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={top100Films}
        disableCloseOnSelect
        getOptionLabel={(option) => option.label}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.label}
            </li>
          );
        }}
        style={{ width: 500, maxWidth: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Checkboxes" placeholder="Favorites" />
        )}
      />
    </div>
  );
}
