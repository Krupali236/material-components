import * as React from "react";
import { loadCSS } from "fg-loadcss";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
        },
      },
    },
  },
});
export default function FontAwesomeIcon() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div>
      <h3>Font Awesome</h3>
      <Stack direction="row" spacing={4} sx={{ alignItems: "flex-end" }}>
        <Icon baseClassName="fas" className="fa-plus-circle" />
        <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />
        <Icon
          baseClassName="fas"
          className="fa-plus-circle"
          sx={{ color: green[500] }}
        />
        <Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" />
        <Icon
          baseClassName="fas"
          className="fa-plus-circle"
          sx={{ fontSize: 30 }}
        />
      </Stack>
      <h3>Font Awesome</h3>
      <Stack direction="row" spacing={2}>
        <ThemeProvider theme={theme}>
          <Chip icon={<MdPhone />} label="Call me" />
          <Chip icon={<Icon className="fas fa-phone-alt" />} label="Call me" />
          <Chip icon={<MdPhone />} label="Call me" />
        </ThemeProvider>
      </Stack>
    </div>
  );
}
