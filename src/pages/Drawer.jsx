import React from "react";
import TemporaryDrawer from "../components/Navigation/Drawer/TemporaryDrawer";
import AnchorTemporaryDrawer from "../components/Navigation/Drawer/AnchorTemporaryDrawer";
import SwipeableTemporaryDrawer from "../components/Navigation/Drawer/SwipeableTemporaryDrawer";
import SwipeableEdgeDrawer from "../components/Navigation/Drawer/SwipeableEdgeDrawer";
import PersistentDrawerLeft from "../components/Navigation/Drawer/PersistentDrawerLeft";
// import DashboardLayoutBasic from "../components/Navigation/Drawer/DashboardLayoutBasic";
// import ClippedDrawer from "../components/Navigation/Drawer/ClippedDrawer";
// import PermanentDrawerRight from "../components/Navigation/Drawer/PermanentDrawerRight";
// import PermanentDrawerLeft from "../components/Navigation/Drawer/PermanentDrawerLeft";
// import MiniDrawer from "../components/Navigation/Drawer/MiniDrawer";
// import ResponsiveDrawer from "../components/Navigation/Drawer/ResponsiveDrawer";

const Drawer = () => {
  return (
    <div style={{ margin: "15px" }}>
      <TemporaryDrawer />
      <AnchorTemporaryDrawer />
      <SwipeableTemporaryDrawer />
      <SwipeableEdgeDrawer />
      <PersistentDrawerLeft />
      {/* <ResponsiveDrawer /> 
       <MiniDrawer /> 
       <PermanentDrawerLeft />  */}
      {/* <PermanentDrawerRight/> */}
      {/* <ClippedDrawer /> */}
      {/* <DashboardLayoutBasic /> */}
    </div>
  );
};

export default Drawer;
