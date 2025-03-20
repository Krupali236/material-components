import React from "react";
import SimpleDialogDemo from "../components/Feedback/Dialog/SimpleDialogDemo";
import AlertDialog from "../components/Feedback/Dialog/AlertDialog";
import AlertDialogSlide from "../components/Feedback/Dialog/AlertDialogSlide";
import FormDialog from "../components/Feedback/Dialog/FormDialog";
import CustomizedDialogs from "../components/Feedback/Dialog/CustomizedDialogs";
import FullScreenDialog from "../components/Feedback/Dialog/FullScreenDialog";
import MaxWidthDialog from "../components/Feedback/Dialog/MaxWidthDialog";
import ResponsiveDialog from "../components/Feedback/Dialog/ResponsiveDialog";
import ConfirmationDialog from "../components/Feedback/Dialog/ConfirmationDialog";
import CookiesBanner from "../components/Feedback/Dialog/CookiesBanner";
import DraggableDialog from "../components/Feedback/Dialog/DraggableDialog";
import ScrollDialog from "../components/Feedback/Dialog/ScrollDialog";
const Dialog = () => {
  return (
    <div style={{ margin: "15px" }}>
      <SimpleDialogDemo />
      <AlertDialog />
      <AlertDialogSlide />
      <FormDialog />
      <CustomizedDialogs />
      <FullScreenDialog />
      <MaxWidthDialog />
      <ResponsiveDialog />
      <ConfirmationDialog />
      <CookiesBanner />
      <DraggableDialog />
      <ScrollDialog />
    </div>
  );
};

export default Dialog;
