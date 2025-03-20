import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "../pages/BottomNavigation";
import Breadcrumbs from "../pages/Breadcrumbs";
import Drawer from "../pages/Drawer";
import Link from "../pages/Link";
import Menu from "../pages/Menu";
import Pagination from "../pages/Pagination";
import SpeedDial from "../pages/SpeedDial";
import Stepper from "../pages/Stepper";
import TabsNav from "../pages/TabsNav";
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
          flexGrow: 1,
          maxWidth: { lg: "100%", xs: "100%", sm: "100%" },
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
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

        <TabPanel value={value} index={0} dir={theme.direction}>
          <BottomNavigation />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Breadcrumbs />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Drawer />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Link />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Menu />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Pagination />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <SpeedDial />
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <Stepper />
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          <TabsNav />
        </TabPanel>
      </Box>
    </div>
  );
}
