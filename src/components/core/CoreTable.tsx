'use client';

import { IColumn } from '@/lib/types';
import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { FunctionComponent, useCallback, useMemo, useState } from 'react';

interface CoreTableProps {
  columns: IColumn[];
  items: any[];
}

const CoreTable: FunctionComponent<CoreTableProps> = props => {
  const { columns, items } = props;

  const router = useRouter();
  const pathname = usePathname();

  const [page, setPage] = useState(1);

  const renderCell = useCallback((item: any, columnKey: any) => {
    switch (columnKey) {
      default:
        return null;
    }
  }, []);

  const pages: number = 10;

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1), router.push(`${pathname}?page=${page}`);
    }
  }, [page, pages, router, pathname]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1), router.push(`${pathname}?page=${page}`);
    }
  }, [page, router, pathname]);

  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className='hidden sm:flex w-[30%] justify-end gap-2'>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size='sm'
            variant='flat'
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages]);

  return (
    <Table bottomContent={bottomContent}>
      <TableHeader>
        {columns.map((column: IColumn) => {
          return <TableColumn key={column.key}>{column.label}</TableColumn>;
        })}
      </TableHeader>

      <TableBody items={items}>
        {item => (
          <TableRow key={item.name}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CoreTable;
