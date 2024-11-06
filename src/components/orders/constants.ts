import { IFormField } from '@/types';

export const ORDER_COLUMNS = [
  { uid: 'orderNo', label: 'Захиалгын дугаар' },
  { uid: 'products', label: 'Захиалгын зураг' },
  { uid: 'createdAt', label: 'Захиалсан өдөр' },
  { uid: 'deliveryDate', label: 'Хүргүүлэх өдөр' },
  { uid: 'status', label: 'Төлөв' },
  { uid: 'supplier.name', label: 'Нийлүүлэгч' },
  { uid: 'user.phoneNumber', label: 'Утасны дугаар' }
];

export const ORDER_FILTER_FIELDS: IFormField[] = [
  {
    name: 'orderNo',
    label: 'Захиалгын дугаар',
    placeholder: 'Захиалгын дугаар'
  }
];
