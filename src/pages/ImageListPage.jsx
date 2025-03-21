import React from "react";
import StandardImageList from "../components/Layout/ImageList/StandardImageList";
import QuiltedImageList from "../components/Layout/ImageList/QuiltedImageList";
import WovenImageList from "../components/Layout/ImageList/WovenImageList";
import MasonryImageList from "../components/Layout/ImageList/MasonryImageList";
import TitlebarImageList from "../components/Layout/ImageList/TitlebarImageList";
import TitlebarBelowImageList from "../components/Layout/ImageList/TitlebarBelowImageList";
import TitlebarBelowMasonryImageList from "../components/Layout/ImageList/TitlebarBelowMasonryImageList";
import CustomImageList from "../components/Layout/ImageList/CustomImageList";

const ImageListPage = () => {
  return (
    <div style={{ margin: "15px" }}>
      <StandardImageList />
      <QuiltedImageList />
      <WovenImageList />
      <MasonryImageList />
      <TitlebarImageList />
      <TitlebarBelowImageList />
      <TitlebarBelowMasonryImageList />
      <CustomImageList />
    </div>
  );
};

export default ImageListPage;
