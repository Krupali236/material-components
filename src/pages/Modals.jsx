import React from "react";
import BasicModal from "../components/Utils/Modals/BasicModal";
import NestedModal from "../components/Utils/Modals/NestedModal";
import TransitionsModal from "../components/Utils/Modals/TransitionsModal";
import KeepMountedModal from "../components/Utils/Modals/KeepMountedModal";
import ServerModal from "../components/Utils/Modals/ServerModal";

const Modals = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicModal />
      <NestedModal />
      <TransitionsModal />
      <KeepMountedModal />
      <ServerModal />
    </div>
  );
};

export default Modals;
