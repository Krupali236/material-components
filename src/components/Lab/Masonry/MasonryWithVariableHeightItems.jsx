import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  color: theme.palette.text.secondary,
}));

export default function MasonryWithVariableHeightItems() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // Increase delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: 600, lg: 700 },
        p: 2,
      }}
    >
      <h3>Items with Variable Height</h3>

      {mounted && ( // Only render Masonry after delay
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {heights.map((height, index) => (
            <Paper key={index} elevation={3} sx={{ p: 1 }}>
              <StyledAccordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Contents</Typography>
                </AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
      )}
    </Box>
  );
}
