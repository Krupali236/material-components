import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "../pages/Alert";
import Backdrop from "../pages/Backdrop";
import Dialog from "../pages/Dialog";
import Progress from "../pages/Progress";
import Skeleton from "../pages/Skeleton";
import Snackbar from "../pages/Snackbar";
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

export default function Feedback() {
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
          <Tab label="Alert" {...a11yProps(0)} />
          <Tab label="Backdrop" {...a11yProps(1)} />
          <Tab label="Dialog" {...a11yProps(2)} />
          <Tab label="Progress" {...a11yProps(3)} />
          <Tab label="Skeleton" {...a11yProps(4)} />
          <Tab label="Snackbar" {...a11yProps(5)} />
        </Tabs>

        <TabPanel value={value} index={0} dir={theme.direction}>
          <Alert />
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
