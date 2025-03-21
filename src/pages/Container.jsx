import React from "react";
import SimpleContainer from "../components/Layout/Container/SimpleContainer";
import FixedContainer from "../components/Layout/Container/FixedContainer";

const Container = () => {
  return (
    <div style={{ margin: "15px" }}>
      <SimpleContainer />
      <FixedContainer/>
    </div>
  );
};

export default Container;
