import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Settings } from "lucide-react";

export const tableColumnOptions = (columns: ColumnDef<any, unknown>[]) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="ml-auto text-neutral-800  p-2 bg-borderTable rounded-sm">
        <Settings size={20} className="" />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {/* {columns.map((column) => {
        return (
          <DropdownMenuCheckboxItem
            key={column.id}
            className="capitalize"
            checked={column.getIsVisible()}
            onCheckedChange={(value) => column.toggleVisibility(!!value)}
          >
            {column.id}
          </DropdownMenuCheckboxItem>
        );
      })} */}
    </DropdownMenuContent>
  </DropdownMenu>
);
