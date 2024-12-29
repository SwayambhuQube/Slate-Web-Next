import React, { useEffect, useMemo } from "react";
import {
  Column,
  HeaderGroup,
  useBlockLayout,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useSortBy,
  useTable,
} from "react-table";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

export interface PaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
}
export interface ColumnProps {
  Header: any;
  accessor: string | ((item: any) => any);
  isSearchable?: boolean;
}
interface TableProps {
  data: Object[];
  columns: ColumnProps[];
  sortable?: boolean;
  loading?: boolean;
  resizable?: boolean;
  loadingComponent?: React.ReactNode;
  EmptyState?: React.ReactNode;
  hasFooter?: boolean;
  footerComponent?: React.ReactNode;
  onRowClick?: (row: any) => void;
  onCellClick?: (cell: any) => void;
  pageSize?: number;
  pageIndex?: number;
  getPaginationControls?: (paginationData: PaginationProps) => void;
}
export const Table = ({
  data,
  columns = [],
  sortable = true,
  loading = false,
  resizable = true,
  loadingComponent = <Loading />,
  EmptyState = <EmptyStateComponent />,
  onRowClick,
  hasFooter = true,
  footerComponent,
  pageSize = 10,
  pageIndex = 0,
  getPaginationControls,
  onCellClick,
}: TableProps) => {
  const defaultColumn = useMemo(
    () => ({
      minWidth: 30,
      width: 200,
      maxWidth: 200,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
  }: any = useTable(
    {
      columns: columns as Column<Object>[],
      data,
      defaultColumn,
    },
    useFlexLayout,
    useSortBy,
    usePagination,
    useBlockLayout,
    useResizeColumns,
    (hooks) => {
      hooks.useInstanceBeforeDimensions.push(({ headerGroups }: any) => {
        // fix the parent group of the selection button to not be resizable
        const selectionGroupHeader =
          headerGroups[0].headers[columns.length - 1];
        selectionGroupHeader.canResize = false;
      });
    }
  );
  useEffect(() => {
    setPageSize(pageSize);
    gotoPage(pageIndex);
  }, [gotoPage, pageIndex, pageSize, setPageSize]);

  useEffect(() => {
    getPaginationControls &&
      getPaginationControls({ pageCount, canNextPage, canPreviousPage });
  }, [pageCount, canNextPage, canPreviousPage]);
  if (data.length === 0) return EmptyState;
  return (
    <>
      <div className={"p-6 bg-[#f5f8fa]"}>
        <div className=" text-xs block overflow-auto overflow-x-scroll leading-6 ">
          <div {...getTableProps()} className=" w-full border-spacing-0">
            <div className="w-full border-spacing-0 overflow-hidden">
              {headerGroups.map((headerGroup: HeaderGroup, i: number) => (
                <div
                  {...headerGroup.getHeaderGroupProps({
                    style: {
                      width: "100%",
                      transition: "all 0.3s ease-in-out",
                    },
                  })}
                  key={i}
                  className="border-solid border-b-2 border-[#cfdce6] font-medium w-full max-w-full "
                >
                  {headerGroup.headers.map((column: any, j: number) => (
                    <div
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={`${i}${j}`}
                      className="bg-white px-3 py-4 w-full"
                    >
                      <div className="flex w-full justify-between">
                        <div className="flex w-full items-center select-text overflow-hidden text-ellipsis ">
                          <React.Suspense fallback={loadingComponent}>
                            {loading ? (
                              loadingComponent
                            ) : (
                              <span className="ml-1 select-text overflow-hidden text-ellipsis whitespace-nowrap inline-block align-middle leading-6 ">
                                {column.render("Header")}
                              </span>
                            )}
                          </React.Suspense>
                          {sortable ? (
                            <div className="flex h-fit">
                              <svg
                                width="24"
                                height="24"
                                fill="none"
                                className=""
                              >
                                <path
                                  d="M12 5.75c-.262 0-.462.144-.709.372L7.813 9.38a1.027 1.027 0 00-.313.738c0 .588.421 1.002.853 1.002.215 0 .431-.102.626-.288L12 8.036l3.015 2.796c.2.186.411.288.632.288.432 0 .853-.414.853-1.002 0-.282-.118-.552-.319-.738L12.71 6.122c-.247-.234-.447-.372-.709-.372z"
                                  fill={
                                    !column.isSortedDesc && column.isSorted
                                      ? "#000"
                                      : "#ADBBCC"
                                  }
                                ></path>
                                <path
                                  d="M12 18.25c.262 0 .462-.144.709-.372l3.478-3.258c.195-.186.313-.456.313-.738 0-.588-.421-1.002-.853-1.002-.216 0-.431.102-.627.288L12 15.964l-3.015-2.796c-.2-.186-.411-.288-.632-.288-.432 0-.853.414-.853 1.002 0 .282.118.552.318.738l3.473 3.258c.247.234.447.372.709.372z"
                                  fill={
                                    column.isSortedDesc && column.isSorted
                                      ? "#000"
                                      : "#ADBBCC"
                                  }
                                ></path>
                              </svg>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        {column.canResize && resizable && (
                          <div
                            className=" h-full flex "
                            {...column.getResizerProps()}
                          >
                            <svg
                              width="20"
                              height="24"
                              fill="none"
                              onClick={(e: any) => e.stopPropagation()}
                            >
                              <path
                                d="M12 8.77A1.385 1.385 0 1012 6a1.385 1.385 0 000 2.77zM12 13.385a1.385 1.385 0 100-2.77 1.385 1.385 0 000 2.77zM8.77 16.615a1.385 1.385 0 11-2.77 0 1.385 1.385 0 012.77 0zM13.385 16.615a1.385 1.385 0 11-2.77 0 1.385 1.385 0 012.77 0zM8.77 12A1.385 1.385 0 116 12a1.385 1.385 0 012.77 0zM8.77 7.385a1.385 1.385 0 11-2.77 0 1.385 1.385 0 012.77 0z"
                                className="fill-skin-color"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="max-h-[calc(100%-200px)] w-full  overflow-y-scroll overflow-hidden font-normal border-b-solid border-b-[1px] border-[#cfdce6]  ">
              <div
                {...getTableBodyProps()}
                className="border-b-solid border-b-[1px] border-[#cfdce6] w-full"
              >
                {page.map((row: any, i: number) => {
                  prepareRow(row);
                  return (
                    <div
                      {...row.getRowProps({
                        style: { width: "100%" },
                      })}
                      key={`${i}`}
                      onClick={() => {
                        onRowClick && onRowClick(row);
                      }}
                    >
                      <div
                        className={`w-full h-full flex bg-white ${
                          !!onRowClick &&
                          "hover:bg-[#f4f4f4] hover: cursor-pointer"
                        }`}
                      >
                        {row.cells.map((cell: any, j: number) => (
                          <div
                            {...cell.getCellProps()}
                            key={`${i}${j}`}
                            className={`${
                              cell.column.isSearchable
                                ? "hover:underline text-[#0a5ecc] "
                                : ""
                            }px-3 py-4 select-text overflow-hidden text-ellipsis border-solid border-b-[1px] border-[#cfdce6] w-full `}
                            onClick={(e) => {
                              if (!cell.column.isSearchable) return;
                              onCellClick && onCellClick(cell);
                              e.stopPropagation();
                            }}
                          >
                            <React.Suspense fallback={loadingComponent}>
                              {loading ? loadingComponent : cell.render("Cell")}
                            </React.Suspense>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {hasFooter && (
          <div className="bg-white border-0 rounded-b-[10px] w-full h-16">
            {footerComponent}
          </div>
        )}
      </div>
    </>
  );
};

export const Loading = () => (
  <div className="max-w-sm animate-pulse">
    <div className="h-5 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
  </div>
);

export const EmptyStateComponent = () => (
  <div className="h-full w-full text-justify">No Data</div>
);
