import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
// import { green } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Alert from "../pages/Alert";
import Backdrop from "../pages/Backdrop";
import Dialog from "../pages/Dialog";
import Progress from "../pages/Progress";
import Skeleton from "../pages/Skeleton";
import Snackbar from "../pages/Snackbar";
import BottomNavigation from "../pages/BottomNavigation";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ margin: "15px" }}>
      <Box
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          position: "relative",
          height: "100%",
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Bottom Navigation" {...a11yProps(0)} />
            <Tab label="Breadcrums" {...a11yProps(1)} />
            <Tab label="Drawer" {...a11yProps(2)} />
            <Tab label="Link" {...a11yProps(3)} />
            <Tab label="Menu" {...a11yProps(4)} />
            <Tab label="Pagination" {...a11yProps(5)} />
            <Tab label="Speed Dial" {...a11yProps(6)} />
            <Tab label="Stepper" {...a11yProps(7)} />
            <Tab label="Tabs" {...a11yProps(8)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <BottomNavigation />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Backdrop />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Dialog />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Progress />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Skeleton />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Snackbar />
        </TabPanel>
      </Box>
    </div>
  );
}
