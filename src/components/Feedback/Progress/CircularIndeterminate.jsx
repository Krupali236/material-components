import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";

export default function CircularIndeterminate() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef(undefined);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <div>
      <h3>Circular indeterminate</h3>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>

      <h3>Circular color</h3>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>

      <h3>Circular size</h3>
      <Stack spacing={2} direction="row" alignItems="center">
        <CircularProgress size="30px" />
        <CircularProgress size={40} />
        <CircularProgress size="3rem" />
      </Stack>

      <h3>Circular determinate</h3>
      <Stack spacing={2} direction="row">
        <CircularProgress variant="determinate" value={25} />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} />
        <CircularProgress variant="determinate" value={100} />
        <CircularProgress variant="determinate" value={progress} />
      </Stack>

      <h3>Interactive integration</h3>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: green[500],
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
        <Box sx={{ m: 1, position: "relative" }}>
          <Button
            variant="contained"
            sx={buttonSx}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </Box>
    </div>
  );
}
