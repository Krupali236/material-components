import React, { useState, useEffect } from "react";
import BasicMasonry from "../components/Lab/Masonry/BasicMasonry";
import ImageMasonry from "../components/Lab/Masonry/ImageMasonry";
import MasonryWithVariableHeightItems from "../components/Lab/Masonry/MasonryWithVariableHeightItems";
import FixedColumns from "../components/Lab/Masonry/FixedColumns";
import ResponsiveColumns from "../components/Lab/Masonry/ResponsiveColumns";
import FixedSpacing from "../components/Lab/Masonry/FixedSpacing";
import ResponsiveSpacing from "../components/Lab/Masonry/ResponsiveSpacing";
import Sequential from "../components/Lab/Masonry/Sequential";
import SSRMasonry from "../components/Lab/Masonry/SSRMasonry";

const MasonryPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const resizeObservers = [];
    requestAnimationFrame(() => setMounted(true)); // Smooth rendering

    return () => {
      resizeObservers.forEach((observer) => observer.disconnect()); // Disconnect observers
    };
  }, []);

  return (
    <div style={{ margin: "15px" }}>
      {mounted && (
        <>
          <BasicMasonry />
          <ImageMasonry />
          <MasonryWithVariableHeightItems />
          <FixedColumns />
          <ResponsiveColumns />
          <FixedSpacing />
          <ResponsiveSpacing />
          <Sequential />
          <SSRMasonry />
        </>
      )}
    </div>
  );
};

export default MasonryPage;
