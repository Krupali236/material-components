import React from "react";
import BasicCard from "../components/Surfaces/Card/BasicCard";
import OutlinedCard from "../components/Surfaces/Card/OutlinedCard";
import RecipeReviewCard from "../components/Surfaces/Card/RecipeReviewCard";
import MediaCard from "../components/Surfaces/Card/MediaCard";
import MultiActionAreaCard from "../components/Surfaces/Card/MultiActionAreaCard";
import MediaControlCard from "../components/Surfaces/Card/MediaControlCard";
import SelectActionCard from "../components/Surfaces/Card/SelectActionCard";

const Card = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicCard />
      <OutlinedCard />
      <RecipeReviewCard />
      <MediaCard />
      <MultiActionAreaCard />
      <MediaControlCard />
      <SelectActionCard />
    </div>
  );
};

export default Card;
