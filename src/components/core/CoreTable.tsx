'use client';

import { IColumn } from '@/lib/types';
import { getNestedValue, isDate, isImagePath } from '@/lib/utils';
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
  FunctionComponent,
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
import CoreImage from '@/components/core/CoreImage';

interface CoreTableProps {
  data: any[];
  columns: IColumn[];
  totalPage: number;
  currentPage: number;
  rowsPerPage?: number;
  customTopContents?: ReactNode;
  onRowAction?: (key: Key) => void;
  customRenderCell?: (item: any, columnKey: string) => ReactNode;
}

const CoreTable: FunctionComponent<CoreTableProps> = props => {
  const {
    columns,
    data,
    customTopContents,
    totalPage,
    currentPage,
    onRowAction,
    customRenderCell
  } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setIsLoading(false);
  }, [data]);

  const onPageChange = (value: number) => {
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );

    currentParams.set('page', value.toString());

    setIsLoading(true), onPageChangeAction(`${pathname}?${currentParams}`);
  };

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
  }, [currentPage, totalPage]);

  const renderCell = useCallback((item: any, columnKey: string) => {
    const value = getNestedValue(item, columnKey.split('.'));

    const type = isImagePath(value) ? 'image' : isDate(value) ? 'date' : '';

    switch (type) {
      case 'date':
        return <div>{getKeyValue(value, columnKey)}</div>;
      case 'image':
        return (
          <div className='w-10 h-10 mx-auto'>
            <CoreImage src={value} />
          </div>
        );
      default:
        return (
          <div className='line-clamp-2'>
            {getKeyValue(value, columnKey) || '--'}
          </div>
        );
    }
  }, []);

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
          <TableRow key={item.id || item._id}>
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
