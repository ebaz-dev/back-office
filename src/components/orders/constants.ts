import { IFormField } from '@/types';

export const ORDER_COLUMNS = [
  { uid: 'orderNo', label: 'Захиалгын дугаар' },
  { uid: 'products', label: 'Захиалгын зураг' },
  { uid: 'createdAt', label: 'Захиалсан өдөр' },
  { uid: 'deliveryDate', label: 'Хүргүүлэх өдөр' },
  { uid: 'status', label: 'Төлөв' },
  { uid: 'totalPrice', label: 'Нийт үнийн дүн' },
  { uid: 'supplier.name', label: 'Нийлүүлэгч' },
  { uid: 'merchant.name', label: 'Харилцагчийн нэр' },
  { uid: 'merchant.phone', label: 'Харилцагчийн утасны дугаар' },
  { uid: 'merchant.cityName', label: 'Хот / Аймаг' },
  { uid: 'merchant.districtName', label: 'Дүүрэг / Сум' },
  { uid: 'merchant.subDistrictName', label: 'Хороо / Баг' },
  { uid: 'merchant.address', label: 'Дэлгэрэнгүй хаяг' }
];

export const ORDER_FILTER_FIELDS: IFormField[] = [
  {
    name: 'orderNo',
    label: 'Захиалгын дугаар',
    placeholder: 'Захиалгын дугаар'
  }
];
