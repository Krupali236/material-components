import React from "react";
import SimplePaper from "../components/Surfaces/Paper/SimplePaper";
import Elevation from "../components/Surfaces/Paper/Elevation";
import Variants from "../components/Surfaces/Paper/Variants";
import SquareCorners from "../components/Surfaces/Paper/SquareCorners";

const Paper = () => {
  return (
    <div style={{ margin: "15px" }}>
      <SimplePaper />
      <Elevation />
      <Variants />
      <SquareCorners />
    </div>
  );
};

export default Paper;
