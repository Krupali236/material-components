import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Button from "../pages/Button";
import ButtonGroup from "../pages/ButtonGroup";
import Checkbox from "../pages/Checkbox";
import FloatingButton from "../pages/FloatingButton";
import RadioGroup from "../pages/RadioGroup";
import Rating from "../pages/Rating";
import Select from "../pages/Select";
import Slider from "../pages/Slider";
import Switch from "../pages/Switch";
import TextField from "../pages/TextField";
import TransferList from "../pages/TransferList";
import ToggleButton from "../pages/ToggleButton";
import AutoComplete from "../pages/AutoComplete";

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
        <Tab label="AutoComplete" {...a11yProps(0)} />
        <Tab label="Button" {...a11yProps(1)} />
        <Tab label="Button Group" {...a11yProps(2)} />
        <Tab label="Checkbox" {...a11yProps(3)} />
        <Tab label="Floating Action Button" {...a11yProps(4)} />
        <Tab label="Radio Group" {...a11yProps(5)} />
        <Tab label="Rating" {...a11yProps(6)} />
        <Tab label="Select" {...a11yProps(7)} />
        <Tab label="Slider" {...a11yProps(8)} />
        <Tab label="Switch" {...a11yProps(9)} />
        <Tab label="Text Field" {...a11yProps(10)} />
        <Tab label="Transfer List" {...a11yProps(11)} />
        <Tab label="Toggle Button" {...a11yProps(12)} />
      </Tabs>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <AutoComplete />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Button />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <ButtonGroup />
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <Checkbox />
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <FloatingButton />
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <RadioGroup />
      </TabPanel>
      <TabPanel value={value} index={6} dir={theme.direction}>
        <Rating />
      </TabPanel>
      <TabPanel value={value} index={7} dir={theme.direction}>
        <Select />
      </TabPanel>
      <TabPanel value={value} index={8} dir={theme.direction}>
        <Slider />
      </TabPanel>
      <TabPanel value={value} index={9} dir={theme.direction}>
        <Switch />
      </TabPanel>
      <TabPanel value={value} index={10} dir={theme.direction}>
        <TextField />
      </TabPanel>
      <TabPanel value={value} index={11} dir={theme.direction}>
        <TransferList />
      </TabPanel>
      <TabPanel value={value} index={12} dir={theme.direction}>
        <ToggleButton />
      </TabPanel>
    </Box>
  );
}
