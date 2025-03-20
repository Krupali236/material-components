import React from "react";
import BasicMenu from "../components/Navigation/Menu/BasicMenu";
import IconMenu from "../components/Navigation/Menu/IconMenu";
import SimpleListMenu from "../components/Navigation/Menu/SimpleListMenu";
import MenuListComposition from "../components/Navigation/Menu/MenuListComposition";
import AccountMenu from "../components/Navigation/Menu/AccountMenu";
import CustomizedMenus from "../components/Navigation/Menu/CustomizedMenus";
import LongMenu from "../components/Navigation/Menu/LongMenu";
import TypographyMenu from "../components/Navigation/Menu/TypographyMenu";
import FadeMenu from "../components/Navigation/Menu/FadeMenu";
import ContextMenu from "../components/Navigation/Menu/ContextMenu";
import GroupedMenu from "../components/Navigation/Menu/GroupedMenu";

const Menu = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicMenu />
      <IconMenu />
      <SimpleListMenu />
      <MenuListComposition />
      <AccountMenu />
      <CustomizedMenus />
      <LongMenu />
      <TypographyMenu />
      <FadeMenu />
      <ContextMenu />
      <GroupedMenu />
    </div>
  );
};

export default Menu;
