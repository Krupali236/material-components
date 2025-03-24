import * as React from "react";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
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
        points="0,100 50,0 100,100"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
      />
    </svg>
  </Paper>
);

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", p: 2 }}>
      <h3>Collapse</h3>

      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
        sx={{ display: "block", textAlign: "center", mb: 2 }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Collapse in={checked}>{icon}</Collapse>
        <Collapse in={checked} collapsedSize={40}>
          {icon}
        </Collapse>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Collapse orientation="horizontal" in={checked}>
            {icon}
          </Collapse>
          <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
            {icon}
          </Collapse>
        </Box>
      </Box>
    </Box>
  );
}
