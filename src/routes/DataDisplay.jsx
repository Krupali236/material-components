import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "../pages/Avatar";
import Badge from "../pages/Badge";
import Chip from "../pages/Chip";
import Divider from "../pages/Divider";
import Icons from "../pages/Icons";
import MaterialIcon from "../pages/MaterialIcon";
import List from "../pages/List";
import Table from "../pages/Table";
import Tooltip from "../pages/Tooltip";
import Typographi from "../pages/Typography";
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

export default function DataDisplayComponents() {
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
          <Tab label="Avatar" {...a11yProps(0)} />
          <Tab label="Badge" {...a11yProps(1)} />
          <Tab label="Chip" {...a11yProps(2)} />
          <Tab label="Divider" {...a11yProps(3)} />
          <Tab label="Icons" {...a11yProps(4)} />
          <Tab label="Material Icons" {...a11yProps(5)} />
          <Tab label="List" {...a11yProps(6)} />
          <Tab label="Table" {...a11yProps(7)} />
          <Tab label="Tooltip" {...a11yProps(8)} />
          <Tab label="Typography" {...a11yProps(9)} />
        </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Avatar />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Badge />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Chip />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Divider />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Icons />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <MaterialIcon />
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <List />
        </TabPanel>
        <TabPanel value={value} index={7} dir={theme.direction}>
          <Table />
        </TabPanel>
        <TabPanel value={value} index={8} dir={theme.direction}>
          <Tooltip />
        </TabPanel>
        <TabPanel value={value} index={9} dir={theme.direction}>
          <Typographi />
        </TabPanel>
      </Box>
    </div>
  );
}
