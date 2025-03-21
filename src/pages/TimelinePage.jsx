import React from "react";
import BasicTimeline from "../components/Lab/Timeline/BasicTimeline";
import LeftPositionedTimeline from "../components/Lab/Timeline/LeftPositionedTimeline";
import AlternateTimeline from "../components/Lab/Timeline/AlternateTimeline";
import AlternateReverseTimeline from "../components/Lab/Timeline/AlternateReverseTimeline";
import ColorsTimeline from "../components/Lab/Timeline/ColorsTimeline";
import OutlinedTimeline from "../components/Lab/Timeline/OutlinedTimeline";
import OppositeContentTimeline from "../components/Lab/Timeline/OppositeContentTimeline";
import CustomizedTimeline from "../components/Lab/Timeline/CustomizedTimeline";
import LeftAlignedTimeline from "../components/Lab/Timeline/LeftAlignedTimeline";
import RightAlignedTimeline from "../components/Lab/Timeline/RightAlignedTimeline";
import NoOppositeContent from "../components/Lab/Timeline/NoOppositeContent";

const TimelinePage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicTimeline />
      <LeftPositionedTimeline />
      <AlternateTimeline />
      <AlternateReverseTimeline />
      <ColorsTimeline />
      <OutlinedTimeline />
      <OppositeContentTimeline />
      <CustomizedTimeline />
      <LeftAlignedTimeline />
      <RightAlignedTimeline />
      <NoOppositeContent />
    </div>
  );
};

export default TimelinePage;
