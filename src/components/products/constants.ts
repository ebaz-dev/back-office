import { IFormField } from '@/types';

export const PRODUCTS_COLUMNS = [
  { uid: 'images', label: 'Зураг' },
  { uid: 'isActive', label: 'Төлөв' },
  { uid: 'id', label: 'Бүтээгдэхүүний ID' },
  { uid: 'name', label: 'Бүтээгдэхүүний нэр' },
  { uid: 'barCode', label: 'Бүтээгдэхүүний баркод' },
  { uid: 'sku', label: 'Бүтээгдхүүний SKU' },
  { uid: 'inCase', label: 'Хайрцаган дахь тоо' },
  { uid: 'inventory.availableStock', label: 'Сагслах тоо' },
  { uid: 'inventory.totalStock', label: 'Үлдэгдэл' },
  { uid: 'customer.name', label: 'Нийлүүлэгч' }
];

export const PRODUCTS_FILTER_FIELDS: IFormField[] = [
  {
    name: 'id',
    label: 'Бүтээгдэхүүний ID',
    placeholder: 'Бүтээгдэхүүний ID'
  },
  {
    name: 'name',
    label: 'Бүтээгдэхүүний нэр',
    placeholder: 'Бүтээгдэхүүний нэр'
  },
  {
    name: 'barCode',
    label: 'Бүтээгдэхүүний баркод',
    placeholder: 'Бүтээгдэхүүний баркод'
  }
];
