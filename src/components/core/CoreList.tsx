"use client";

import {
  getKeyValue,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import CoreEmpty from "./CoreEmpty";
import { onQueryParamChangeAction } from "@/app/actions/main";
import { useMemo } from "react";
import { addOptionsToColumns, getNestedValue } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { FilterOptionsType, IColumn } from "@/types";
import CoreListFilter from "@/components/core/CoreListFilter";
import CorePagination from "./CorePagination";

const CoreList = <T extends { id: string | number }>({
  data,
  columns,
  totalPages,
  currentPage,
  filterOptions,
}: {
  data: T[];
  columns: IColumn[];
  totalPages: number;
  currentPage: number;
  filterOptions: FilterOptionsType;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(Array.from(searchParams.entries()));
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({});

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);
  }, [data]);

  const onPageChange = useCallback(
    (value: number) => {
      currentParams.set("page", value.toString());
      setIsLoading(true);
      onQueryParamChangeAction(`${pathname}?${currentParams}`);
    },
    [currentParams, setIsLoading, pathname]
  );

  const topContent = useMemo(
    () => (
      <CoreListFilter
        columns={
          filterOptions ? addOptionsToColumns(columns, filterOptions) : columns
        }
        pathname={pathname}
      />
    ),
    [columns]
  );

  const bottomContent = useMemo(() => {
    return totalPages > 0 ? (
      <CorePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    ) : null;
  }, [currentPage, totalPages, onPageChange]);

  const renderCell = useCallback(
    (item: T, columnKey: string) => {
      const filtered = columns.find((col) => col.uid === columnKey);
      const cellValue = getKeyValue(
        getNestedValue(item, columnKey.split(".")),
        columnKey
      );
      return filtered && filtered.customCell ? (
        filtered.customCell(cellValue)
      ) : (
        <div className="line-clamp-2">{cellValue || "--"}</div>
      );
    },
    [columns]
  );

  const onSortChange = useCallback((sort: SortDescriptor) => {
    const { column, direction } = sort;

    currentParams.set("sortBy", column as string);
    currentParams.set("sortOrder", direction as string);

    setSortDescriptor(sort);
    onQueryParamChangeAction(`${pathname}?${currentParams}`);
  }, []);

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex-1">
        <Table
          aria-label="core table"
          topContent={topContent}
          topContentPlacement="outside"
          bottomContent={bottomContent}
          bottomContentPlacement="outside"
          selectionMode={isClient ? "multiple" : "none"}
          selectionBehavior="toggle"
          sortDescriptor={sortDescriptor}
          onSortChange={(sort) => onSortChange(sort)}
          isHeaderSticky
          // onRowAction={onRowAction}
          classNames={
            data.length === 0
              ? {
                  base: "h-full",
                  table: "h-full",
                  tbody: "h-full",
                  wrapper: "h-full",
                }
              : {}
          }
        >
          <TableHeader>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  allowsSorting={column.allowSorting}
                >
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
          </TableHeader>

          <TableBody
            items={data ?? []}
            emptyContent={<CoreEmpty />}
            isLoading={isLoading}
            loadingContent={<Spinner />}
          >
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell className="text-xs text-center">
                    {renderCell(item, columnKey.toString())}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CoreList;
