import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Card sx={{ minWidth: 275, width: 350, height: 300, margin: "50px auto" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 18 }}>
          Hello
        </Typography>
        <Typography variant="h3" component="div">
          Krupali Here
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 16, marginTop: 3 }}>
          Learning Material UI Components
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
