import * as React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Show snackbar</Button>
      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <div>
      <h3>Supplementary components</h3>
      <h2>notistack</h2>
      <SnackbarProvider maxSnack={3}>
        <MyApp />
      </SnackbarProvider>
    </div>
  );
}
