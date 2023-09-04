import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import data from "./data.json";
import Error from "./error";
//   type Table = {
//     id: string
//     name: string
//     location: string
//     health: string
//     ip: string
//     volume: string
//   }
const Table = (props) => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: true,
      grow: 2,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      grow: 2,
    },
    {
      name: "Location",
      selector: "location",
      sortable: true,
      grow: 2,
    },
    {
      name: "Health",
      selector: "health",
      sortable: true,
      grow: 2,
      cell: (row) => <Error error={row.health} />,
    },
    {
      name: "Ip",
      selector: "ip",
      sortable: true,
      grow: 2,
    },
    {
      name: "Volume",
      selector: "volume",
      sortable: true,
      grow: 2,
    },
  ];
  const defaultData = data.data;
  const filteredItems = defaultData.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );
  return (
    <DataTable
      title="Basic table"
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      //subHeaderComponent={subHeaderComponent}
    />
  );
};
export default Table;
