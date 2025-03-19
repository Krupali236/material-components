import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function SimpleAlert() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <h3>Introduction</h3>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Here is a gentle confirmation that your action was successful.
      </Alert>

      <h3>Severity</h3>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">This is a success Alert.</Alert>
        <Alert severity="info">This is an info Alert.</Alert>
        <Alert severity="warning">This is a warning Alert.</Alert>
        <Alert severity="error">This is an error Alert.</Alert>
      </Stack>

      <h2>Variants</h2>
      <h3>Filled</h3>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="success">
          This is a filled success Alert.
        </Alert>
        <Alert variant="filled" severity="info">
          This is a filled info Alert.
        </Alert>
        <Alert variant="filled" severity="warning">
          This is a filled warning Alert.
        </Alert>
        <Alert variant="filled" severity="error">
          This is a filled error Alert.
        </Alert>
      </Stack>

      <h3>Outlined</h3>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="outlined" severity="success">
          This is an outlined success Alert.
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an outlined info Alert.
        </Alert>
        <Alert variant="outlined" severity="warning">
          This is an outlined warning Alert.
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert>
      </Stack>

      <h3>Color</h3>
      <Alert severity="success" color="warning">
        This is a success Alert with warning colors.
      </Alert>

      <h3>Actions</h3>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="warning" onClose={() => {}}>
          This Alert displays the default close icon.
        </Alert>
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This Alert uses a Button component for its action.
        </Alert>
      </Stack>

      <h3>Icons</h3>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          This success Alert has a custom icon.
        </Alert>
        <Alert icon={false} severity="success">
          This success Alert has no icon.
        </Alert>
        <Alert
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          This success Alert uses `iconMapping` to override the default icon.
        </Alert>
      </Stack>

      <h2>Customization</h2>
      <h3>Titles</h3>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert with an encouraging title.
        </Alert>
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          This is an info Alert with an informative title.
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning Alert with a cautious title.
        </Alert>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error Alert with a scary title.
        </Alert>
      </Stack>

      <h3>Transitions</h3>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Click the close icon to see the Collapse transition in action!
          </Alert>
        </Collapse>
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    </div>
  );
}
