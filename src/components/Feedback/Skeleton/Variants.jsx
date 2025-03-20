import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';

export default function Variants() {
  return (
    <div>
      <h3>Variants</h3>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem", width: 210 }} />
        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>

      <h3>Animations</h3>
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
    </div>
  );
}
