"use client";

import { ArrowDownUp, ChevronDown, GripVertical, Settings } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  ColumnResizeDirection,
  ExpandedState,
  HeaderContext,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loading } from "../utils/Loading";
import { EmptyStateComponent } from "../utils/EmptyState";

export interface SlateTableProps {
  data: Object[];
  columns: ColumnDef<any>[];
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
  // getPaginationControls?: (paginationData: PaginationProps) => void;
}
export function SlateTable({
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
  // getPaginationControls,
  onCellClick,
}: SlateTableProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnResizeDirection, setColumnResizeDirection] =
    useState<ColumnResizeDirection>("ltr");
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 250,
  });
  const modifiedColumns: ColumnDef<any>[] = useMemo(
    () => ColumnsWrapper(columns),
    [columns]
  );

  const table = useReactTable({
    data,
    columns: modifiedColumns,
    columnResizeMode: "onChange",
    columnResizeDirection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      expanded,
      pagination,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="bg-white rounded-lg h-full">
      <div className="flex border-b border-borderTable  items-center py-4 px-2 ">
        <Input
          placeholder="Filter all columns..."
          value={(table.getState().globalFilter as string) ?? ""}
          onChange={
            (event) => table.setGlobalFilter(event.target.value)
            // table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button> */}
            <div className="ml-auto text-neutral-800  p-2 bg-borderTable rounded-sm">
              <Settings size={20} className="" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className=" border-borderTable font-normal overflow-scroll max-h-[796px]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className=" border-borderTable ">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      {...{
                        style: {
                          width: header.getSize(),
                        },
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-borderTable w-full "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-textHeading">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {EmptyState}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 p-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  );
}

interface IAddSortingAndResizing {
  text: string;
  headers: HeaderContext<any, unknown>;
  isShortable?: boolean;
  isResizeable?: boolean;
}

const ColumnsWrapper = (columns: ColumnDef<any>[]): ColumnDef<any>[] =>
  columns.map((c) => {
    let column = { ...c };
    if (typeof column.header === "string") {
      column.header = (headers: HeaderContext<any, unknown>) =>
        AddSortingAndResizing({
          text: c.header as string,
          headers,
        });
    }
    return column;
  });

export const AddSortingAndResizing = ({
  text,
  headers: { column, header, table },
  isResizeable = true,
  isShortable = true,
}: IAddSortingAndResizing) => (
  <div className="text-left text-textHeading flex justify-between items-center select-none ">
    <div>
      {isShortable ? (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left px-0 py-2  font-semibold"
        >
          {text}
          <ArrowDownUp className="ml-2 h-4 w-4" />
        </Button>
      ) : (
        <div className=" font-semibold">{text}</div>
      )}
    </div>
    {isResizeable && (
      <div
        {...{
          onDoubleClick: () => header.column.resetSize(),
          onMouseDown: header.getResizeHandler(),
          onTouchStart: header.getResizeHandler(),
          className: `resize ${table.options.columnResizeDirection} ${
            header.column.getIsResizing() ? "text-qube" : "text-borderTable"
          }`,
        }}
      >
        <GripVertical className="cursor-pointer " size={18} />
      </div>
    )}
  </div>
);
