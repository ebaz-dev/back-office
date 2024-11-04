'use client';

import { IColumn } from '@/types/table.types';
import {
  getKeyValue,
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import {
  Key,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { onPageChangeAction } from '@/app/actions/main';
import CoreEmpty from '@/components/core/CoreEmpty';
import { getNestedValue } from '@/lib/utils';

interface Item {
  id: string;
}

interface CoreTableProps<T extends Item> {
  data: T[];
  columns: IColumn[];
  totalPage: number;
  currentPage: number;
  rowsPerPage?: number;
  customTopContents?: ReactNode;
  onRowAction?: (key: Key) => void;
}

const CoreTable = <T extends Item>(props: CoreTableProps<T>): JSX.Element => {
  const {
    columns,
    data,
    customTopContents,
    totalPage,
    currentPage,
    onRowAction
  } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);
  }, [data]);

  const onPageChange = useCallback(
    (value: number) => {
      const currentParams = new URLSearchParams(
        Array.from(searchParams.entries())
      );

      currentParams.set('page', value.toString());

      setIsLoading(true), onPageChangeAction(`${pathname}?${currentParams}`);
    },
    [searchParams, setIsLoading, pathname]
  );

  const topContent = useMemo(() => {
    return (
      <div className='bg-content1 p-4 rounded-large shadow-small flex gap-2 justify-between'>
        {customTopContents}
      </div>
    );
  }, [customTopContents]);

  const bottomContent = useMemo(() => {
    return totalPage > 0 ? (
      <div className='py-2 px-2 flex justify-center items-center'>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={currentPage}
          total={totalPage}
          onChange={onPageChange}
          classNames={{ wrapper: 'shadow-md' }}
        />
      </div>
    ) : null;
  }, [currentPage, totalPage, onPageChange]);

  const renderCell = useCallback(
    (item: T, columnKey: string) => {
      const filtered = columns.find(col => col.uid === columnKey);

      const cellValue = getKeyValue(
        getNestedValue(item, columnKey.split('.')),
        columnKey
      );

      if (filtered && filtered.customCell) {
        return filtered.customCell(cellValue);
      }

      return <div className='line-clamp-2'>{cellValue || '--'}</div>;
    },
    [columns]
  );

  return (
    <Table
      aria-label='core table'
      topContent={topContent}
      topContentPlacement='outside'
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      selectionMode={isClient ? 'multiple' : 'none'}
      selectionBehavior='toggle'
      isHeaderSticky
      onRowAction={onRowAction}
      classNames={
        data.length === 0
          ? {
              base: 'h-full',
              table: 'h-full',
              tbody: 'h-full',
              wrapper: 'h-full'
            }
          : {}
      }
    >
      <TableHeader>
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.uid}>{column.label}</TableColumn>}
        </TableHeader>
      </TableHeader>

      <TableBody
        items={data ?? []}
        emptyContent={<CoreEmpty />}
        isLoading={isLoading}
        loadingContent={<Spinner />}
      >
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell className='text-xs text-center'>
                {renderCell(item, columnKey.toString())}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CoreTable;
