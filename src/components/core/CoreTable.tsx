'use client';

import { IColumn } from '@/lib/types';
import { getNestedValue, isImagePath, tr } from '@/lib/utils';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  getKeyValue,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import CoreImage from '@/components/core/CoreImage';
import { usePathname, useRouter } from 'next/navigation';

interface CoreTableProps {
  data: any[];
  columns: IColumn[];
  rowsPerPage?: number;
  totalPages: number;
  currentPage: number;
  customTopContents?: ReactNode;
  onRowAction: (key: any) => void;
}

const CoreTable: FunctionComponent<CoreTableProps> = props => {
  const {
    columns,
    data,
    customTopContents,
    totalPages,
    currentPage,
    onRowAction
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  const [filterValue, setFilterValue] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onClear = useCallback(() => {
    setFilterValue('');
  }, []);

  const onSearchChange = useCallback(
    (value: string) => {
      if (value) {
        setFilterValue(value);
        router.push(`${pathname}?page=1`);
      } else {
        setFilterValue('');
      }
    },
    [router, pathname]
  );

  const onPageChange = (value: number) => {
    router.push(`${pathname}?page=${value}`);
  };

  const topContent = useMemo(() => {
    return (
      <div className='bg-content1 p-4 rounded-large shadow-small flex gap-2 justify-between'>
        {customTopContents}

        <Input
          isClearable
          className='max-w-80'
          variant='faded'
          placeholder={tr('Хайлт')}
          startContent={
            <MagnifyingGlassIcon className='h-5 w-5 text-default' />
          }
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
      </div>
    );
  }, [filterValue, customTopContents]);

  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-center items-center'>
        <Pagination
          isCompact
          showControls
          showShadow
          color='primary'
          page={currentPage}
          total={totalPages}
          onChange={onPageChange}
        />
      </div>
    );
  }, [currentPage, totalPages]);

  const renderCell = useCallback((item: any, columnKey: any) => {
    const value = getNestedValue(item, columnKey.split('.'));

    const type = isImagePath(value) ? 'image' : '';

    switch (type) {
      case 'image':
        return (
          <div className='w-10 h-10'>
            <CoreImage src={value} />
          </div>
        );
      default:
        return (
          <div className='line-clamp-3'>{getKeyValue(value, columnKey)}</div>
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

      <TableBody items={data ?? []} emptyContent={null}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell className='text-xs'>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CoreTable;
