import { ITableItemType, IColumn } from '@/types';
import {
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
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import CoreEmpty from '@/components/core/CoreEmpty';
import { usePathname, useSearchParams } from 'next/navigation';
import { changePathAction } from '@/app/actions/main';

interface CoreTableProps<ITableItemType> {
  data: ITableItemType[];
  columns: IColumn[];
  renderCell: (item: ITableItemType, columnKey: React.Key) => React.ReactNode;
  totalPage: number;
  currentPage: number;
  onRowAction?: (key: React.Key) => void;
}

const CoreTable: FunctionComponent<CoreTableProps<ITableItemType>> = props => {
  const { columns, data, renderCell, totalPage, currentPage, onRowAction } =
    props;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  const onPageChange = useCallback(
    (value: number) => {
      const currentParams = new URLSearchParams(
        Array.from(searchParams.entries())
      );

      currentParams.set('page', value.toString());

      setIsLoading(true);
      changePathAction(`${pathname}?${currentParams}`);
    },
    [searchParams, setIsLoading, pathname]
  );

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

  const onDefaultRowAction = (key: React.Key) => {
    if (onRowAction) {
      setIsLoading(true);
      onRowAction(key);
    }
  };

  return (
    <Table
      aria-label='custom cells'
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement='outside'
      selectionMode='single'
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
      onRowAction={onDefaultRowAction}
    >
      <TableHeader columns={columns}>
        {column => <TableColumn key={column.uid}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={data ?? []}
        isLoading={isLoading}
        emptyContent={<CoreEmpty />}
        loadingContent={<Spinner />}
      >
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
