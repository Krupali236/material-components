import React from "react";
import BasicTransferList from "../components/Input/TransferList/BasicTransferList";
import SelectAllTransferList from "../components/Input/TransferList/SelectAllTransferList";
const TransferList = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicTransferList />
      <SelectAllTransferList />
    </div>
  );
};

export default TransferList;
