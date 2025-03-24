import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import top100Films from "./top100films";
export default function Tags() {
  return (
    <div style={{ margin: "15px" }}>
      <h3>Multiple Values</h3>
      <Stack spacing={6} sx={{ width: 500, maxWidth: 300 }}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.label}
          defaultValue={[top100Films[13]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="filterSelectedOptions"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="tags-filled"
          options={top100Films.map((option) => option.label)}
          defaultValue={[top100Films[13].title]}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              const { key, ...tagProps } = getTagProps({ index });
              return (
                <Chip
                  variant="outlined"
                  label={option}
                  key={key}
                  {...tagProps}
                />
              );
            })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="freeSolo"
              placeholder="Favorites"
            />
          )}
        />
        <Autocomplete
          multiple
          id="tags-readOnly"
          options={top100Films.map((option) => option.label)}
          defaultValue={[top100Films[12].label, top100Films[13].label]}
          readOnly
          renderInput={(params) => (
            <TextField {...params} label="readOnly" placeholder="Favorites" />
          )}
        />
      </Stack>
    </div>
  );
}
