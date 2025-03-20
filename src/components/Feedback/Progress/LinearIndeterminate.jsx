import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h3>Linear indeterminate</h3>
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>

      <h3>Linear color</h3>
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>

      <h3>Linear determinate</h3>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </div>
  );
}
