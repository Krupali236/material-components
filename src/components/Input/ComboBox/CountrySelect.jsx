import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Countries from "./Countries";
const CountrySelect = () => {
  return (
    <div style={{ margin: "15px" }}>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={Countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <Box
              key={key}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...optionProps}
            >
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              },
            }}
          />
        )}
      />
    </div>
  );
};
export default CountrySelect;
