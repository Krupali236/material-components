import React from "react";
import BasicPopover from "../components/Utils/Popover/BasicPopover";
import MouseOverPopover from "../components/Utils/Popover/MouseOverPopover";
import PopoverPopupState from "../components/Utils/Popover/PopoverPopupState";

const PopoverPage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicPopover />
      <MouseOverPopover />
      <PopoverPopupState/>
    </div>
  );
};

export default PopoverPage;
