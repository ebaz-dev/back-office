import { IColumn } from '@/lib/types';

export const OrderColumns: IColumn[] = [
  { uid: '1', label: 'Захиалгын дугаар' },
  { uid: '2', label: 'Нийлүүлэгч' },
  { uid: '3', label: 'Статус' },
  { uid: '4', label: 'Захиалгын зураг' },
  { uid: '5', label: 'Захиалгын огноо' },
  { uid: '6', label: 'Хүргүүлэх огноо' },
  { uid: '7', label: 'Захиалгын дүн' },
  { uid: '8', label: 'Төлөгдсөн дүн' },
  { uid: '9', label: 'Төлбөрийн хэлбэр' },
  { uid: '10', label: 'Купон' },
  { uid: '11', label: 'Тэмдэглэл' },
  { uid: '12', label: 'Утасны дугаар' },
  { uid: '13', label: 'Харилцагчийн нэр' },
  { uid: '14', label: 'Суваг' },
  { uid: '15', label: 'Хот/аймаг' },
  { uid: '16', label: 'Дүүрэг/сум' },
  { uid: '17', label: 'Хороо/Баг' },
  { uid: '18', label: 'Дэлгэрэнгүй хаяг' },
  { uid: '19', label: 'Pickpack' },
  { uid: '20', label: 'Origin' },
  { uid: '21', label: 'VAT' },
  { uid: '22', label: 'ХТ код/нэр' },
  { uid: '23', label: 'Түгээгч код/нэр' },
  { uid: '24', label: 'Агуулах' }
];

export const ProductsColumns: IColumn[] = [
  { uid: 'id', label: 'Ебазаар бүтээгдэхүүний ID' },
  { uid: 'isActive', label: 'Active' },
  { uid: '', label: 'Нийлүүлэгч' },
  { uid: 'name', label: 'Бүтээгдэхүүний нэр' },
  { uid: 'barCode', label: 'Баркод' },
  { uid: 'sku', label: 'Бүтээгдхүүний SKU' },
  { uid: 'images.0', label: 'Зураг' },
  { uid: 'brand.name', label: 'Брэнд' },
  { uid: 'categories.0.name', label: 'Ерөнхий ангилал' },
  { uid: 'categories.1.name', label: 'Дэд ангилал' },
  { uid: 'categories.2.name', label: 'Эцсийн ангилал' },
  { uid: 'description', label: 'Бүтээгдэхүүний дэлгэрэнгүй' },
  { uid: 'inventory.totalStock', label: 'Үлдэгдэл' },
  { uid: 'adjustedPrice.price', label: 'Үнэ' },
  { uid: 'inventory.availableStock', label: 'Сагслах тоо' },
  { uid: 'inCase', label: 'Хайрцаган дахь тоо' },
  { uid: 'isAlcohol', label: 'Алкохолны төрөл эсэх' },
  { uid: 'cityTax', label: 'Хотын татвар төлөх эсэх' }
];
