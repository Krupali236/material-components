import React from "react";
import BasicRating from "../components/Input/Rating/BasicRating";
import HalfRating from "../components/Input/Rating/RatingPrecision";
import HoverRating from "../components/Input/Rating/HoverRating";
import RatingSize from "../components/Input/Rating/RatingSize";
import CustomizedRating from "../components/Input/Rating/CustomizedRating";
import RadioGroupRating from "../components/Input/Rating/RadioGroupRating";

const Rating = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicRating />
      <HalfRating />
      <HoverRating />
      <RatingSize />
      <CustomizedRating />
      <RadioGroupRating />
    </div>
  );
};

export default Rating;
