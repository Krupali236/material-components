import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Modals from "../pages/Modals";
import PopoverPage from "../pages/PopoverPage";
import PoperPage from "../pages/PoperPage";
import Transitions from "../pages/Transitions";

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
export default function Utils() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
        <Tab label="Modal" {...a11yProps(0)} />
        <Tab label="Popover" {...a11yProps(1)} />
        <Tab label="Popper" {...a11yProps(2)} />
        <Tab label="Transitions" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Modals />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <PopoverPage />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <PoperPage />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Transitions />
      </TabPanel>
    </Box>
  );
}
