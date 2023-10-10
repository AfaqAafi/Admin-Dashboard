import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  useTable,
  Column,
  TableOptions,
  useSortBy,
  usePagination,
} from "react-table";

function TableHoc<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClass: string,
  heading: string,
  showPagination: boolean = false
) {
  return function Hoc() {
    const option: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      rows,
      prepareRow,
      nextPage,
      pageCount,
      state: { pageIndex },
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(option, useSortBy, usePagination);
    return (
      <div className={containerClass}>
        <h2 className="heading">
          {heading}
          <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroups) => (
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {headerGroups.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      {column.isSorted && (
                        <span>
                          {column.isSortedDesc ? (
                            <AiOutlineSortDescending />
                          ) : (
                            <AiOutlineSortAscending />
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showPagination && (
            <div className="table-pagination">
              <button disabled={!canPreviousPage} onClick={previousPage}>
                Prev
              </button>
              <span>{`${pageIndex + 1} of ${pageCount}`}</span>
              <button disabled={!canNextPage} onClick={nextPage}>
                Next
              </button>
            </div>
          )}
        </h2>
      </div>
    );
  };
}

export default TableHoc;
