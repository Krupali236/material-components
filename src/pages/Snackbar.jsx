import React from "react";
import SimpleSnackbar from "../components/Feedback/Snackbar/SimpleSnackbar";
import PositionedSnackbar from "../components/Feedback/Snackbar/PositionedSnackbar";
import AutohideSnackbar from "../components/Feedback/Snackbar/AutohideSnackbar";
import TransitionsSnackbar from "../components/Feedback/Snackbar/TransitionsSnackbar";
import CustomizedSnackbars from "../components/Feedback/Snackbar/CustomizedSnackbars";
import ConsecutiveSnackbars from "../components/Feedback/Snackbar/ConsecutiveSnackbars";
import IntegrationNotistack from "../components/Feedback/Snackbar/IntegrationNotistack";

const Snackbar = () => {
  return (
    <div style={{ margin: "15px" }}>
      <SimpleSnackbar />
      <PositionedSnackbar />
      <AutohideSnackbar />
      <TransitionsSnackbar />
      <CustomizedSnackbars />
      <ConsecutiveSnackbars />
      <IntegrationNotistack />
    </div>
  );
};

export default Snackbar;
