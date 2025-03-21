import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import BoxPage from "../pages/Box";
import Container from "../pages/Container";
import GridV2Page from "../pages/GridV2Page";
import GridPage from "../pages/GridPage";
import StackPage from "../pages/StackPage";
import ImageListPage from "../pages/ImageListPage";

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
export default function Layout() {
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
        <Tab label="Box" {...a11yProps(0)} />
        <Tab label="Container" {...a11yProps(1)} />
        <Tab label="Grid Version 2" {...a11yProps(2)} />
        <Tab label="Grid" {...a11yProps(3)} />
        <Tab label="Stack" {...a11yProps(4)} />
        <Tab label="ImageList" {...a11yProps(5)} />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <BoxPage />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Container />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <GridV2Page />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <GridPage />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <StackPage />
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <ImageListPage />
      </TabPanel>
    </Box>
  );
}
