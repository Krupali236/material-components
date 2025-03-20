import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function CustomizedSnackbars() {
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

  return (
    <div>
      <h2>Customization</h2>
      <h3>Use with Alerts</h3>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>

      <h3>Use with Floating Action Buttons</h3>
      <div style={{ height: 300 }}>
        <React.Fragment>
          <CssBaseline />
          <GlobalStyles
            styles={(theme) => ({
              body: { backgroundColor: theme.palette.background.paper },
            })}
          />
          <div>
            <AppBar position="static" color="primary">
              <Toolbar>
                <IconButton
                  edge="start"
                  sx={{ mr: 2 }}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                  App bar
                </Typography>
              </Toolbar>
            </AppBar>
            <Fab
              color="secondary"
              sx={(theme) => ({
                position: "relative",
                float: "inline-end",
                bottom: theme.spacing(2),
                right: theme.spacing(2),
                top: theme.spacing(20),
              })}
            >
              <AddIcon />
            </Fab>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              message="Archived"
              action={
                <Button color="inherit" size="small">
                  Undo
                </Button>
              }
              sx={{ bottom: { xs: 90, sm: 0 } }}
            />
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}
