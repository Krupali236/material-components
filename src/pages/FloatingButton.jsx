import React from "react";
import FloatingActionButtons from "../components/Input/FloatingActionButton/FloatingActionButton";
import FloatingActionButtonSize from "../components/Input/FloatingActionButton/FloatingActionButtonSize";
import FloatingActionButtonExtendedSize from "../components/Input/FloatingActionButton/FABExtendedSize";
import FloatingActionButtonZoom from "../components/Input/FloatingActionButton/FABZoom";

const FloatingButton = () => {
  return (
    <div style={{ margin: "15px" }}>
      <FloatingActionButtons />
      <FloatingActionButtonSize/>
      <FloatingActionButtonExtendedSize/>
      <FloatingActionButtonZoom/>
    </div>
  );
};

export default FloatingButton;
