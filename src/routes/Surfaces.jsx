import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Accordion from "../pages/Accordion";
import AppBar from "../pages/AppBar";
import Card from "../pages/Card";
import Paper from "../pages/Paper";

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
export default function InputComponents() {
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
        <Tab label="Accordion" {...a11yProps(0)} />
        <Tab label="App Bar" {...a11yProps(1)} />
        <Tab label="Card" {...a11yProps(2)} />
        <Tab label="Paper" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <Accordion />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <AppBar />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Card />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Paper />
      </TabPanel>
    </Box>
  );
}
