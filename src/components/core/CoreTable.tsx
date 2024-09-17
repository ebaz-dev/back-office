'use client';

import { IColumn } from '@/lib/types';
import {
  getKeyValue,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import { FunctionComponent, useCallback, useMemo, useState } from 'react';

interface CoreTableProps {
  data: any[];
  columns: IColumn[];
  rowsPerPage?: number;
}

const CoreTable: FunctionComponent<CoreTableProps> = props => {
  const { columns, data, rowsPerPage = 10 } = props;
  const [page, setPage] = useState(1);

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);

  const renderCell = useCallback((item: any, columnKey: any) => {
    switch (columnKey) {
      default:
        return getKeyValue(item, columnKey);
    }
  }, []);

  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-center items-center'>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages]);

  return (
    <Table
      aria-label='core table'
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      isHeaderSticky
      classNames={{
        base: 'h-full',
        table: 'h-full',
        tbody: 'h-full',
        wrapper: 'h-full'
      }}
    >
      <TableHeader>
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
      </TableHeader>

      <TableBody items={items} emptyContent={null}>
        {item => (
          <TableRow key={item.key}>
            {columnKey => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CoreTable;
