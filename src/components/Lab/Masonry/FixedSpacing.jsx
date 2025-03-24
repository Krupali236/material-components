import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FixedSpacing() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // Increased delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h3>Spacing</h3>
      <Box sx={{ width: { xs: 300, sm: 300, md: 400, lg: 500 }, minHeight: 377 }}>
        {mounted && ( // Prevents Masonry from rendering immediately
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
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
