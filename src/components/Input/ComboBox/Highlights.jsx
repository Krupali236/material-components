import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import top100Films from "./top100films";
export default function Highlights() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Highlights</h3>
      <Autocomplete
        sx={{ width: 300 }}
        options={top100Films}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Highlights" margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const { key, ...optionProps } = props;
          const matches = match(option.label, inputValue, {
            insideWords: true,
          });
          const parts = parse(option.label, matches);

          return (
            <li key={key} {...optionProps}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    </div>
  );
}
