"use client";

import {
  getKeyValue,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import CoreEmpty from "../CoreEmpty";
import { onPageChangeAction } from "@/app/actions/main";
import { useMemo } from "react";
import { getNestedValue } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { IColumn } from "@/types";
import ListFilter from "@/components/core/ListFilter";

const List = <T extends { id: string | number }>({
  data,
  columns,
  totalPages,
  currentPage,
}: {
  data: T[];
  columns: IColumn[];
  totalPages: number;
  currentPage: number;
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParams = new URLSearchParams(Array.from(searchParams.entries()));

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);
  }, [data]);

  const onPageChange = useCallback(
    (value: number) => {
      currentParams.set("page", value.toString());
      setIsLoading(true), onPageChangeAction(`${pathname}?${currentParams}`);
    },
    [searchParams, setIsLoading, pathname]
  );

  const topContent = useMemo(() => {
    return <ListFilter columns={columns} pathname={pathname} />;
  }, [columns]);

  const bottomContent = useMemo(() => {
    return totalPages > 0 ? (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={currentPage}
          total={totalPages}
          onChange={onPageChange}
          classNames={{ wrapper: "shadow-md" }}
        />
      </div>
    ) : null;
  }, [currentPage, totalPages, onPageChange]);

  const renderCell = useCallback(
    (item: T, columnKey: string) => {
      const filtered = columns.find((col) => col.uid === columnKey);

      const cellValue = getKeyValue(
        getNestedValue(item, columnKey.split(".")),
        columnKey
      );

      if (filtered && filtered.customCell) {
        return filtered.customCell(cellValue);
      }

      return <div className="line-clamp-2">{cellValue || "--"}</div>;
    },
    [columns]
  );

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
                <TableColumn key={column.uid}>{column.label}</TableColumn>
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

export default List;
