'use client';

import { IColumn } from '@/lib/types';
import { getNestedValue, isImagePath } from '@/lib/utils';
import {
  getKeyValue,
  Pagination,
  Snippet,
  Switch,
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
import CoreImage from '@/components/core/CoreImage';
import { usePathname, useRouter } from 'next/navigation';

interface CoreTableProps {
  data: any[];
  columns: IColumn[];
  totalPage: number;
  currentPage: number;
  rowsPerPage?: number;
  customTopContents?: ReactNode;
  onRowAction?: (key: Key) => void;
}

const CoreTable: FunctionComponent<CoreTableProps> = props => {
  const {
    columns,
    data,
    customTopContents,
    totalPage,
    currentPage,
    onRowAction
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onPageChange = (value: number) => {
    router.push(`${pathname}?page=${value}`);
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

  const renderCell = useCallback((item: any, columnKey: any) => {
    const value = getNestedValue(item, columnKey.split('.'));

    const type = isImagePath(value)
      ? 'image'
      : typeof value === 'boolean'
      ? 'switch'
      : columnKey === 'id'
      ? 'id'
      : '';

    switch (type) {
      case 'switch':
        return (
          <div className='w-full flex justify-center'>
            <Switch size='sm' isSelected={value} />
          </div>
        );
      case 'image':
        return (
          <div className='w-10 h-10'>
            <CoreImage src={value} />
          </div>
        );
      case 'id':
        return (
          <Snippet size='sm' variant='flat' hideSymbol>
            {getKeyValue(value, columnKey)}
          </Snippet>
        );
      default:
        return (
          <div className='line-clamp-2'>{getKeyValue(value, columnKey)}</div>
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
