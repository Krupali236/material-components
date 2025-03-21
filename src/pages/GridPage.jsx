import React from "react";
import BasicGrid from "../components/Layout/Grid/BasicGrid";
import FullWidthGrid from "../components/Layout/Grid/FullWidthGrid";
import SpacingGrid from "../components/Layout/Grid/SpacingGrid";
import RowAndColumnSpacing from "../components/Layout/Grid/RowAndColumnSpace";
import ResponsiveGrid from "../components/Layout/Grid/ResponsiveGrid";
import AutoGrid from "../components/Layout/Grid/AutoGrid";
import ComplexGrid from "../components/Layout/Grid/ComplexGrid";
import NestedGrid from "../components/Layout/Grid/NestedGrid";
import ColumnsGrid from "../components/Layout/Grid/ColumnsGrid";
import AutoGridNoWrap from "../components/Layout/Grid/AutoGridNoWrap";
import CSSGrid from "../components/Layout/Grid/CSSGrid";

const GridPage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicGrid />
      <FullWidthGrid />
      <SpacingGrid />
      <RowAndColumnSpacing />
      <ResponsiveGrid />
      <AutoGrid />
      <ComplexGrid />
      <NestedGrid />
      <ColumnsGrid />
      <AutoGridNoWrap />
      <CSSGrid />
    </div>
  );
};

export default GridPage;
