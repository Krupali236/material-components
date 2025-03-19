import React from "react";
import BasicTable from "../components/DataDisplay/Table/BasicTable";
import DataTable from "../components/DataDisplay/Table/DataTable";
import DenseTable from "../components/DataDisplay/Table/DenseTable";
import EnhancedTable from "../components/DataDisplay/Table/EnhancedTable";
import CustomizedTables from "../components/DataDisplay/Table/CustomizedTables";
import CustomPaginationActionsTable from "../components/DataDisplay/Table/CustomPaginationActionsTable";
import StickyHeadTable from "../components/DataDisplay/Table/StickyHeadTable";
import ColumnGroupingTable from "../components/DataDisplay/Table/ColumnGroupingTable";
import CollapsibleTable from "../components/DataDisplay/Table/CollapsibleTable";
import SpanningTable from "../components/DataDisplay/Table/SpanningTable";
import ReactVirtualizedTable from "../components/DataDisplay/Table/ReactVirtualizedTable";
import AccessibleTable from "../components/DataDisplay/Table/AccessibleTable";

const Table = () => {
  return (
    <div>
      <BasicTable />
      <DataTable />
      <DenseTable />
      <EnhancedTable />
      <CustomizedTables />
      <CustomPaginationActionsTable />
      <StickyHeadTable />
      <ColumnGroupingTable />
      <CollapsibleTable />
      <SpanningTable />
      <ReactVirtualizedTable/>
     <AccessibleTable/>
    </div>
  );
};

export default Table;
