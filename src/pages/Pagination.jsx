import React from "react";
import BasicPagination from "../components/Navigation/Pagination/BasicPagination";
import TablePaginationDemo from "../components/Navigation/Pagination/TablePaginationDemo";

const Pagination = () => {
  return (
    <div style={{ margin: "15px" }}>
      <BasicPagination />
      <TablePaginationDemo />
    </div>
  );
};

export default Pagination;
