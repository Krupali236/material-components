import React from "react";
import BasicTabs from "../components/Navigation/Tabs/BasicTabs";
import TabsWrappedLabel from "../components/Navigation/Tabs/TabsWrappedLabel";
import ColorTabs from "../components/Navigation/Tabs/ColorTabs";
import DisabledTabs from "../components/Navigation/Tabs/DisabledTabs";
import FullWidthTabs from "../components/Navigation/Tabs/FullWidthTabs";
import CenteredTabs from "../components/Navigation/Tabs/CenteredTabs";
import ScrollableTabsButtonAuto from "../components/Navigation/Tabs/ScrollableTabsButtonAuto";
import ScrollableTabsButtonForce from "../components/Navigation/Tabs/ScrollableTabsButtonForce";
import ScrollableTabsButtonVisible from "../components/Navigation/Tabs/ScrollableTabsButtonVisible";
import ScrollableTabsButtonPrevent from "../components/Navigation/Tabs/ScrollableTabsButtonPrevent";
import CustomizedTabs from "../components/Navigation/Tabs/CustomizedTabs";
import VerticalTabs from "../components/Navigation/Tabs/VerticalTabs";
import NavTabs from "../components/Navigation/Tabs/NavTabs";
import IconTabs from "../components/Navigation/Tabs/IconTabs";
import AccessibleTabs1 from "../components/Navigation/Tabs/AccessibleTabs1";
import AccessibleTabs2 from "../components/Navigation/Tabs/AccessibleTabs2";

const TabsNav = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicTabs />
      <TabsWrappedLabel />
      <ColorTabs />
      <DisabledTabs />
      <FullWidthTabs />
      <CenteredTabs />
      <ScrollableTabsButtonAuto />
      <ScrollableTabsButtonForce />
      <ScrollableTabsButtonVisible />
      <ScrollableTabsButtonPrevent />
      <CustomizedTabs />
      <VerticalTabs />
      <NavTabs />
      <IconTabs />
      <AccessibleTabs1 />
      <AccessibleTabs2 />
    </div>
  );
};

export default TabsNav;
