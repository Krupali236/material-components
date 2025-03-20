import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />

      <h3>Content</h3>
      <Stack spacing={2} sx={{ maxWidth: 600 }}>
        <SnackbarContent message="I love snacks." action={action} />
        <SnackbarContent
          message={
            "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
          }
        />
        <SnackbarContent
          message="I love candy. I love cookies. I love cupcakes."
          action={action}
        />
        <SnackbarContent
          message={
            "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
          }
          action={action}
        />
      </Stack>
    </div>
  );
}
