import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";
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

export default function SimpleZoom() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <h3>Zoom</h3>
      <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box sx={{ display: "flex" }}>
          <Zoom in={checked}>{icon}</Zoom>
          <Zoom
            in={checked}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
          >
            {icon}
          </Zoom>
        </Box>
      </Box>
    </div>
  );
}
