import React from "react";
import Variants from "../components/Feedback/Skeleton/Variants";
import YouTube from "../components/Feedback/Skeleton/YouTube";
import Facebook from "../components/Feedback/Skeleton/Facebook";
import SkeletonTypography from "../components/Feedback/Skeleton/SkeletonTypography";
import SkeletonChildren from "../components/Feedback/Skeleton/SkeletonChildren";
import SkeletonColor from "../components/Feedback/Skeleton/SkeletonColor";

const Skeleton = () => {
  return (
    <div>
      <Variants />
      <YouTube />
      <Facebook />
      <SkeletonTypography />
      <SkeletonChildren />
      <SkeletonColor/>
    </div>
  );
};

export default Skeleton;
