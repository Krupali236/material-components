import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonColor() {
  return (
    <div>
      <h3>Color</h3>
      <Box
        sx={{
          bgcolor: "#121212",
          p: 8,
          width: { xs: 200, sm: 300, md: 600 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      </Box>
    </div>
  );
}
