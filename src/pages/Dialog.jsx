import React from "react";
import SimpleDialogDemo from "../components/Feedback/Dialog/SimpleDialogDemo";
import AlertDialog from "../components/Feedback/Dialog/AlertDialog";
import AlertDialogSlide from "../components/Feedback/Dialog/AlertDialogSlide";

const Dialog = () => {
  return (
    <div style={{margin:"15px"}}>
      <SimpleDialogDemo />
      <AlertDialog/>
      <AlertDialogSlide/>
    </div>
  );
};

export default Dialog;
