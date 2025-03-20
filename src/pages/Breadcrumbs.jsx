import React from "react";
import BasicBreadcrumbs from "../components/Navigation/Breadcrumbs/BasicBreadcrumbs";
import CustomSeparator from "../components/Navigation/Breadcrumbs/CustomSeparator";
import IconBreadcrumbs from "../components/Navigation/Breadcrumbs/IconBreadcrumbs";
import CollapsedBreadcrumbs from "../components/Navigation/Breadcrumbs/CollapsedBreadcrumbs";
import CondensedWithMenu from "../components/Navigation/Breadcrumbs/CondensedWithMenu";
import CustomizedBreadcrumbs from "../components/Navigation/Breadcrumbs/CustomizedBreadcrumbs";
import RouterBreadcrumbs from "../components/Navigation/Breadcrumbs/RouterBreadcrumbs";

const Breadcrumbs = () => {
  return (
    <div>
      <BasicBreadcrumbs />
      <CustomSeparator />
      <IconBreadcrumbs />
      <CollapsedBreadcrumbs />
      <CondensedWithMenu />
      <CustomizedBreadcrumbs />
      <RouterBreadcrumbs />
    </div>
  );
};

export default Breadcrumbs;
