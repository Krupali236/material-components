import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import { green } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
import FourKIcon from "@mui/icons-material/FourK";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import SvgIcon from "@mui/material/SvgIcon";
import { pink } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { createSvgIcon } from "@mui/material/utils";
const useIsDarkMode = () => {
  const theme = useTheme();
  return theme.palette.mode === "dark";
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const HomeIcon1 = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  "Home"
);
const PlusIcon = createSvgIcon(
  // credit: plus icon from https://heroicons.com
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>,
  "Plus"
);

export default function SvgMaterialIcons() {
  const isDarkMode = useIsDarkMode();
  return (
    <div>
      <h3>Material SVG icons</h3>
      <Grid container sx={{ color: "text.primary" }}>
        <Grid item xs={4}>
          <Typography>Filled</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteIcon />
          <DeleteForeverIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteOutlinedIcon />
          <DeleteForeverOutlinedIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Rounded</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteRoundedIcon />
          <DeleteForeverRoundedIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Two Tone</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteTwoToneIcon />
          <DeleteForeverTwoToneIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Sharp</Typography>
        </Grid>
        <Grid item xs={8}>
          <DeleteSharpIcon />
          <DeleteForeverSharpIcon />
        </Grid>
        <Grid item xs={4}>
          <Typography>Edge-cases</Typography>
        </Grid>
        <Grid item xs={8}>
          <ThreeDRotationIcon />
          <FourKIcon />
          <ThreeSixtyIcon />
        </Grid>
      </Grid>

      <h3>SvgIcon</h3>
      <SvgIcon>
        {/* credit: cog icon from https://heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
          />
        </svg>
      </SvgIcon>

      <h3>Colors</h3>
      <Stack direction="row" spacing={3}>
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />
        <HomeIcon sx={{ color: pink[500] }} />
      </Stack>

      <h3>Sizes</h3>
      <Stack direction="row" spacing={3} sx={{ alignItems: "flex-end" }}>
        <HomeIcon fontSize="small" />
        <HomeIcon />
        <HomeIcon fontSize="large" />
        <HomeIcon sx={{ fontSize: 40 }} />
      </Stack>

      <h3>createSvgIcon</h3>
      <Stack direction="row" spacing={3}>
        <HomeIcon1 />
        <HomeIcon1 color="primary" />
        <PlusIcon />
        <PlusIcon color="secondary" />
      </Stack>

      <h3>Font Material Icons</h3>
      <Stack direction="row" spacing={3}>
        <Icon>add_circle</Icon>
        <Icon color="primary">add_circle</Icon>
        <Icon sx={{ color: green[500] }}>add_circle</Icon>
        <Icon fontSize="small">add_circle</Icon>
        <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
      </Stack>

      <h3>Custom font</h3>
      <Icon
        sx={[isDarkMode && { filter: "invert(1)" }]}
        baseClassName="material-icons-two-tone"
      >
        add_circle
      </Icon>
    </div>
  );
}
