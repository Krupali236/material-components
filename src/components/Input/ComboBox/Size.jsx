import * as React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import top100Films from "./top100films";
export default function Sizes() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Small Size Combo-box</h3>
      <Stack spacing={2} sx={{ width: 500, maxWidth: 300 }}>
        <Autocomplete
          id="size-small-standard"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="size-small-standard-multi"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          id="size-small-outlined"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites" />
          )}
        />
        <Autocomplete
          multiple
          id="size-small-outlined-multi"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField {...params} label="Size small" placeholder="Favorites" />
          )}
        />
        <Autocomplete
          id="size-small-filled"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="size-small-filled-multi"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={[top100Films[13]]}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <Chip
                  key={key}
                  variant="outlined"
                  label={option.label}
                  size="small"
                  {...tagProps}
                />
              );
            })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Size small"
              placeholder="Favorites"
            />
          )}
        />
      </Stack>
    </div>
  );
}
