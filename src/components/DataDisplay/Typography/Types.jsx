import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";

export default function Types() {
  return (
    <div>
      <h2>Typography</h2>
      <h3>Google Web Fonts</h3>

      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "90%", sm: "80%", md: 600 },
          mx: "auto",
          p: 2,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
        >
          Google Web Fonts
        </Typography>

        <Box>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
          >
            h1. Heading
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" } }}
          >
            h2. Heading
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "1.6rem", sm: "2rem", md: "3rem" } }}
          >
            h3. Heading
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.5rem" } }}
          >
            h4. Heading
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem" } }}
          >
            h5. Heading
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.4rem", md: "1.8rem" } }}
          >
            h6. Heading
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" } }}
          >
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
          >
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
          >
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" } }}
          >
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>

          <Typography
            variant="button"
            gutterBottom
            sx={{ display: "block", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
          >
            button text
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: "block", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
          >
            caption text
          </Typography>
          <Typography
            variant="overline"
            gutterBottom
            sx={{ display: "block", fontSize: { xs: "0.7rem", sm: "0.8rem" } }}
          >
            overline text
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
