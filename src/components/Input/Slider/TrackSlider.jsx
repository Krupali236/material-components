import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const Separator = styled("div")(
  ({ theme }) => `
  height: ${theme.spacing(3)};
`
);

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

function valuetext(value) {
  return `${value}°C`;
}

export default function TrackFalseSlider() {
  return (
    <div>
      <h3>Track</h3>
      <Box sx={{ width: 250 }}>
        <Typography id="track-false-slider" gutterBottom>
          Removed track
        </Typography>
        <Slider
          track={false}
          aria-labelledby="track-false-slider"
          getAriaValueText={valuetext}
          defaultValue={30}
          marks={marks}
        />
        <Separator />
        <Typography id="track-false-range-slider" gutterBottom>
          Removed track range slider
        </Typography>
        <Slider
          track={false}
          aria-labelledby="track-false-range-slider"
          getAriaValueText={valuetext}
          defaultValue={[20, 37, 50]}
          marks={marks}
        />
      </Box>

      <h3>Inverted track</h3>
      <Box sx={{ width: 250 }}>
        <Typography id="track-inverted-slider" gutterBottom>
          Inverted track
        </Typography>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-slider"
          getAriaValueText={valuetext}
          defaultValue={30}
          marks={marks}
        />
        <Separator />
        <Typography id="track-inverted-range-slider" gutterBottom>
          Inverted track range
        </Typography>
        <Slider
          track="inverted"
          aria-labelledby="track-inverted-range-slider"
          getAriaValueText={valuetext}
          defaultValue={[20, 37]}
          marks={marks}
        />
      </Box>
    </div>
  );
}
