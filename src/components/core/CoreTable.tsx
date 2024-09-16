import { IColumn } from '@/lib/types';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react';
import { FunctionComponent, useCallback } from 'react';

interface CoreTableProps {
  columns: IColumn[];
  items: any[];
}

const CoreTable: FunctionComponent<CoreTableProps> = props => {
  const { columns, items } = props;

  const renderCell = useCallback((item: any, columnKey: any) => {
    switch (columnKey) {
      default:
        return null;
    }
  }, []);

  return (
    <Table>
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
