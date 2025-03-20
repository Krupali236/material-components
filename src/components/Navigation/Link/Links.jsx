/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const preventDefault = (event) => event.preventDefault();

export default function Links() {
  return (
    <div>
      <h3>Basic links</h3>
      <Box
        sx={{
          typography: "body1",
          "& > :not(style) ~ :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#">Link</Link>
        <Link href="#" color="inherit">
          {'color="inherit"'}
        </Link>
        <Link href="#" variant="body2">
          {'variant="body2"'}
        </Link>
      </Box>

      <h3>Underline</h3>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          typography: "body1",
          "& > :not(style) ~ :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#" underline="none">
          {'underline="none"'}
        </Link>
        <Link href="#" underline="hover">
          {'underline="hover"'}
        </Link>
        <Link href="#" underline="always">
          {'underline="always"'}
        </Link>
      </Box>

      <h3>Accessibility</h3>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Button Link
      </Link>
    </div>
  );
}
