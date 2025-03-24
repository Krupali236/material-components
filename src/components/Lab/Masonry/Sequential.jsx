import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Sequential() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // Increased delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h3>Sequential</h3>
      <Box
        sx={{
          width: { xs: 300, sm: 300, md: 400, lg: 500 },
          height: 450,
          overflow: "hidden",
        }}
      >
        {mounted && ( // Only render Masonry after delay
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {heights.map((height, index) => (
              <Item key={index} sx={{ height }}>
                {index + 1}
              </Item>
            ))}
          </Masonry>
        )}
      </Box>
    </div>
  );
}
