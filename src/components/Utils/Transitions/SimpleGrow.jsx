import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";

const icon = (
  <Paper
    sx={{
      m: 1,
      width: { xs: 80, sm: 100, md: 150 },
      height: { xs: 80, sm: 100, md: 150 },
    }}
    elevation={4}
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </svg>
  </Paper>
);

export default function SimpleGrow() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <h3>Grow</h3>
      <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box sx={{ display: "flex" }}>
          <Grow in={checked}>{icon}</Grow>
          {/* Conditionally applies the timeout prop to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            {icon}
          </Grow>
        </Box>
      </Box>
    </div>
  );
}
