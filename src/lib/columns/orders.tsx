import CoreGroupImages from '@/components/core/CoreGroupImages';
import { IColumn, IProductsFieldProps } from '@/lib/types';
import { Chip } from '@nextui-org/react';
import moment from 'moment';
import { replaceText } from '@/lib/utils';

export const OrderColumns = (props?: IProductsFieldProps): IColumn[] => [
  {
    uid: 'orderNo',
    name: 'orderNo',
    label: 'Захиалгын дугаар',
    fieldType: 'input',
    placeholder: 'Захиалгын дугаар',
    isFilterable: true
  },
  {
    uid: 'merchant.tradeShops.0._id',
    name: 'tradeshopId',
    label: 'Trade shop ID',
    fieldType: 'input',
    placeholder: 'Trade shop ID'
  },
  {
    uid: 'supplier.name',
    name: 'supplier',
    label: 'Нийлүүлэгч'
  },
  {
    uid: 'products',
    name: 'images',
    label: 'Захиалгын зураг',
    customCell: (customValue: any) => {
      let images: string[] = [];

      customValue.map((product: any) => images.push(product.images));

      return <CoreGroupImages images={images} />;
    }
  },
  {
    uid: 'status',
    name: 'status',
    label: 'Захиалгын төлөв',
    fieldType: 'select',
    placeholder: 'Захиалгын төлөв',
    options: [],
    customCell: (customValue: any) => {
      return (
        <Chip
          variant='shadow'
          color={
            customValue === 'confirmed'
              ? 'success'
              : customValue === 'cancelled'
              ? 'danger'
              : customValue === 'delivered'
              ? 'secondary'
              : customValue === 'pending'
              ? 'warning'
              : 'default'
          }
          size='sm'
          className='text-white'
        >
          {replaceText(customValue)}
        </Chip>
      );
    }
  },
  {
    uid: 'orderedAt',
    name: 'orderedAt',
    label: 'Захиалсан өдөр',
    placeholder: 'Захиалсан өдөр',
    fieldType: 'datepicker',
    isFilterable: true,
    customCell: (customValue: any) =>
      moment(customValue).format('HH:MM:ss DD/MM/YYYY')
  },
  {
    uid: 'deliveryDate',
    name: 'deliveryDate',
    label: 'Хүргүүлэх өдөр',
    placeholder: 'Хүргүүлэх өдөр',
    fieldType: 'datepicker',
    isFilterable: true,
    customCell: (customValue: any) => moment(customValue).format('DD/MM/YYYY')
  },
  {
    uid: '7',
    name: 'total',
    label: 'Захиалгын дүн',
    placeholder: 'Захиалгын дүн'
  },
  {
    uid: '8',
    name: 'payed',
    label: 'Төлөгдсөн дүн',
    placeholder: 'Төлөгдсөн дүн'
  },
  {
    uid: 'paymentMethod',
    name: 'paymentMethod',
    label: 'Төлбөрийн хэлбэр',
    placeholder: 'Төлбөрийн хэлбэр',
    fieldType: 'select',
    options: []
  },
  {
    uid: 'merchant.phone',
    name: 'merchant.phone',
    label: 'Утасны дугаар',
    fieldType: 'input',
    placeholder: 'Утасны дугаар'
  },
  {
    uid: 'merchant.name',
    name: 'merchant',
    label: 'Харилцагчийн нэр',
    placeholder: 'Харилцагчийн нэр'
  },
  {
    uid: '11',
    name: 'note',
    label: 'Тэмдэглэл',
    placeholder: 'Тэмдэглэл'
  },
  {
    uid: 'channel',
    name: 'channel',
    label: 'Бизнесийн суваг',
    placeholder: 'Бизнесийн суваг',
    fieldType: 'select',
    options: []
  },

  {
    uid: '15',
    name: 'city',
    label: 'Хот/аймаг',
    fieldType: 'select',
    options: [],
    placeholder: 'Хот/аймаг'
  },
  {
    uid: '16',
    name: 'district',
    label: 'Дүүрэг/сум',
    fieldType: 'select',
    options: [],
    placeholder: 'Дүүрэг/сум'
  },
  {
    uid: '17',
    label: 'Хороо/Баг',
    name: 'khoroo',
    fieldType: 'select',
    options: [],
    placeholder: 'Хороо/Баг'
  },
  {
    uid: 'address',
    name: 'address',
    label: 'Дэлгэрэнгүй хаяг',
    placeholder: 'Дэлгэрэнгүй хаяг',
    fieldType: 'input'
  },
  {
    uid: '101',
    name: 'bus',
    label: 'Бүсчлэл',
    placeholder: 'Бүсчлэл',
    fieldType: 'select',
    options: []
  },
  {
    uid: '10',
    name: 'coupon',
    label: 'Купон',
    placeholder: 'Купон',
    fieldType: 'input'
  },
  {
    uid: '102',
    name: 'eh',
    label: 'Захиалгын эх үүсвэр',
    placeholder: 'Захиалгын эх үүсвэр',
    fieldType: 'select',
    options: []
  },
  {
    uid: '22',
    name: 'ht',
    label: 'Худалдааны төлөөлөгийн код',
    placeholder: 'Худалдааны төлөөлөгийн код',
    fieldType: 'input'
  },
  {
    uid: '23',
    name: 'tugeegch',
    label: 'Түгээгчийн код',
    placeholder: 'Түгээгчийн код',
    fieldType: 'input'
  },
  {
    uid: '19',
    name: 'noat',
    label: 'НӨАТ',
    placeholder: 'НӨАТ'
  },
  {
    uid: '20',
    name: 'return',
    label: 'Буцаалт',
    placeholder: 'Буцаалт',
    fieldType: 'input'
  },
  {
    uid: '21',
    name: 'shuurhai',
    label: 'Шуурхай түгээлт',
    placeholder: 'Шуурхай түгээлт'
  },
  {
    uid: '24',
    name: 'inventory',
    label: 'Агуулах',
    placeholder: 'Агуулах',
    fieldType: 'select',
    options: []
  }
];