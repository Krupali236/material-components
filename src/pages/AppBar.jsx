import React from "react";
import ButtonAppBar from "../components/Surfaces/AppBar/ButtonAppBar";
import MenuAppBar from "../components/Surfaces/AppBar/MenuAppBar";
import ResponsiveAppBar from "../components/Surfaces/AppBar/ResponsiveAppBar";
import SearchAppBar from "../components/Surfaces/AppBar/SearchAppBar";
import DrawerAppBar from "../components/Surfaces/AppBar/DrawerAppBar";
import PrimarySearchAppBar from "../components/Surfaces/AppBar/PrimarySearchAppBar";
import DenseAppBar from "../components/Surfaces/AppBar/DenseAppBar";
import ProminentAppBar from "../components/Surfaces/AppBar/ProminentAppBar";
// import BottomAppBar from "../components/Surfaces/AppBar/BottomAppBar";
// import HideAppBar from "../components/Surfaces/AppBar/HideAppBar";
// import ElevateAppBar from "../components/Surfaces/AppBar/ElevateAppBar";
// import BackToTop from "../components/Surfaces/AppBar/BackToTop";
import EnableColorOnDarkAppBar from "../components/Surfaces/AppBar/EnableColorOnDarkAppBar";

const AppBar = () => {
  return (
    <div style={{ margin: "15px" }}>
      <ButtonAppBar />
      <MenuAppBar />
      <ResponsiveAppBar />
      <SearchAppBar />
      <DrawerAppBar />
      <PrimarySearchAppBar />
      <DenseAppBar />
      <ProminentAppBar />
      {/* <BottomAppBar /> */}
      {/* <HideAppBar /> */}
      {/* <ElevateAppBar /> */}
      {/* <BackToTop /> */}
      <EnableColorOnDarkAppBar />
    </div>
  );
};

export default AppBar;
