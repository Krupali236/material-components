import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

export default function DiscreteSliderSteps() {
  return (
    <div>
      <h3>Discrete sliders</h3>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </Box>

      <h3>Small steps</h3>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Small steps"
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay="auto"
        />
      </Box>

      <h3>Custom marks</h3>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>

      <h3>Restricted values</h3>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>

      <h3>Label always visible</h3>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="Always visible"
          defaultValue={80}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </Box>
    </div>
  );
}
