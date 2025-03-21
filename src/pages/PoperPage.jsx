import React from "react";
import SimplePopper from "../components/Utils/Popper/SimplePopper";
import TransitionsPopper from "../components/Utils/Popper/TransitionsPopper";
import SpringPopper from "../components/Utils/Popper/SpringPopper";
import PositionedPopper from "../components/Utils/Popper/PositionedPopper";
import VirtualElementPopper from "../components/Utils/Popper/VirtualElementPopper";
import PopperPopupState from "../components/Utils/Popper/PopperPopupState";

const PoperPage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <SimplePopper />
      <TransitionsPopper />
      <SpringPopper />
      <PositionedPopper />
      <VirtualElementPopper />
      <PopperPopupState/>
    </div>
  );
};

export default PoperPage;
