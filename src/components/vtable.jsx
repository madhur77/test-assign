import React, { useState } from "react";
import {
  Table,
  WindowScroller,
  Column,
  AutoSizer,
  createTableMultiSort,
  SortIndicator,
  SortDirection,
} from "react-virtualized";
import styled from "styled-components";
import "react-virtualized/styles.css";

const VTable = () => {
  const getRows = (num) => {
    return [...Array(num).keys()].map((a) => ({
      id: a,
      name: a + `Music -or - ~~ Dance`,
      count: Math.floor(Math.random() * 100),
    }));
  };

  const count = 10000;
  const rows = getRows(count);
  const [_rows, setRows] = useState(rows);
  const [_sortDirection, setDir] = useState({
    id: "ASC",
    name: "ASC",
    count: "ASC",
  });
  const [searchval, setSearchVal] = useState();

  const TableWrapper = styled.div`
    .ReactVirtualized__Table {
    }

    .ReactVirtualized__Table__headerColumn {
      color: blue;
    }

    .ReactVirtualized__Table__headerRow {
      background: palevioletred;
      border: 1px solid gray;
    }

    .ReactVirtualized__Table__row {
      background: whites;
      border-right: 1px solid gray;
      border-left: 1px solid gray;
      border-bottom: 1px solid gray;
    }

    .ReactVirtualized__Table__rowColumn {
    }

    .ReactVirtualized__Table__sortableHeaderColumn {
    }

    .ReactVirtualized__Table__sortableHeaderIcon {
    }
  `;

  const Cell = styled.div``;

  const headerRenderer = ({ dataKey, label }) => {
    const showSortIndicator = sortState.sortBy.includes(dataKey);
    return (
      <>
        <span title={label}>{label}</span>
        {showSortIndicator && (
          <SortIndicator sortDirection={sortState.sortDirection[dataKey]} />
        )}
      </>
    );
  };
  const sortState = createTableMultiSort(sort, {
    defaultSortBy: ["id", "name", "count"],
    defaultSortDirection: {
      id: "ASC",
      name: "ASC",
      count: "ASC",
    },
  });

  function sort({ sortBy, sortDirection }) {
    // 'sortBy' is an ordered Array of fields.
    // 'sortDirection' is a map of field name to "ASC" or "DESC" directions.
    // Sort your collection however you'd like.
    // When you're done, setState() or update your Flux store, etc.
    console.log(sortDirection);
    const _sort = sortBy[0];
    const newRows = [..._rows];
    let sortedList = newRows.sort((a, b) => {
      return a[_sort] - b[_sort];
    });

    if (sortDirection[_sort] === SortDirection.DESC) {
      console.log("infunction");
      sortedList = sortedList.reverse();
    }

    setRows(sortedList);
    setDir({ ..._sortDirection, ...sortDirection });
    console.log(_sortDirection);
  }

  const handleSearchBox = (e) => {
    const keyword = e.target.value;
    const findD = [...rows];
    const res = findD.filter((item) => item.name.includes(keyword));
    setSearchVal(keyword);
    setRows(res);
  };

  const VirtualizedTable = (props) => {
    return (
      <TableWrapper>
        <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <>
                  <input
                    type="text"
                    placeholder="Enter some number"
                    onChange={handleSearchBox}
                    value={searchval}
                    
                  />
                  <Table
                    {...props}
                    autoHeight
                    width={width}
                    height={height}
                    isScrolling={isScrolling}
                    onScroll={onChildScroll}
                    scrollTop={scrollTop}
                    sort={sortState.sort}
                    sortBy={undefined}
                    sortDirection={SortDirection.ASC}
                  />
                </>
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      </TableWrapper>
    );
  };

  const CountCell = ({ cellData }) => <Cell>{cellData}</Cell>;

  const ActionsCell = ({ rowData }) => (
    <Cell>
      {rowData.count % 2 === 0 ? (
        <button>Music </button>
      ) : (
        <button>dance </button>
      )}
    </Cell>
  );

  return (
    <VirtualizedTable
      rowHeight={40}
      headerHeight={50}
      rowCount={_rows.length}
      rowGetter={({ index }) => _rows[index]}
    >
      <Column
        label="Id"
        dataKey="id"
        width={100}
        headerRenderer={headerRenderer}
      />
      <Column
        label="Name"
        dataKey="name"
        width={200}
        headerRenderer={headerRenderer}
      />
      <Column
        label="Count"
        dataKey="count"
        width={100}
        cellRenderer={CountCell}
        headerRenderer={headerRenderer}
      />
      <Column
        label="Actions"
        dataKey=""
        width={100}
        cellRenderer={ActionsCell}
        headerRenderer={headerRenderer}
      />
    </VirtualizedTable>
  );
};

export default VTable;
