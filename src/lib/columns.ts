import { IColumn, IProductsFieldProps } from '@/lib/types';

export const OrderColumns: IColumn[] = [
  { uid: 'id', label: 'Захиалгын дугаар' },
  { uid: '123', label: 'Trade shop ID' },
  { uid: 'supplierId', label: 'Нийлүүлэгч' },
  { uid: '4', label: 'Захиалгын зураг' },
  { uid: '3', label: 'Захиалгын төлөв' },
  { uid: 'orderedAt', label: 'Захиалсан өдөр' },
  { uid: 'deliveryDate', label: 'Хүргүүлэх өдөр ' },
  { uid: '7', label: 'Захиалгын дүн' },
  { uid: '8', label: 'Төлөгдсөн дүн' },
  { uid: '11', label: 'Тэмдэглэл' },
  { uid: '14', label: 'Бизнесийн суваг' },
  { uid: '12', label: 'Утасны дугаар' },
  { uid: '13', label: 'Харилцагчийн нэр' },
  { uid: '15', label: 'Хот/аймаг' },
  { uid: '16', label: 'Дүүрэг/сум' },
  { uid: '17', label: 'Хороо/Баг' },
  { uid: '18', label: 'Дэлгэрэнгүй хаяг' },
  { uid: '101', label: 'Бүсчлэл' },
  { uid: '9', label: 'Төлбөрийн хэлбэр' },
  { uid: '10', label: 'Купон' },
  { uid: '102', label: 'Захиалгын эх үүсвэр' },
  { uid: '22', label: 'Худалдааны төлөөлөгийн код' },
  { uid: '23', label: 'Түгээгчийн код' },
  { uid: '19', label: 'НӨАТ' },
  { uid: '20', label: 'Буцаалт' },
  { uid: '21', label: 'Шуурхай түгээлт' },
  { uid: '24', label: 'Агуулах' }
];

export const ProductsColumns = (props?: IProductsFieldProps): IColumn[] => [
  {
    uid: 'images.0',
    label: 'Зураг',
    name: 'images',
    fieldType: 'file',
    placeholder: 'Зураг',
    isFilter: false
  },
  {
    uid: 'id',
    label: 'Бүтээгдэхүүний ID',
    name: 'id',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний ID',
    isFilter: true
  },
  {
    uid: 'name',
    label: 'Бүтээгдэхүүний нэр',
    name: 'name',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний нэр',
    isFilter: true
  },
  {
    uid: 'isActive',
    label: 'Төлөв',
    name: 'isActive',
    fieldType: 'select',
    placeholder: 'Төлөв',
    options: [
      { value: 'true', label: 'Идэвхтэй' },
      { value: 'false', label: 'Идэвхгүй' }
    ],
    isFilter: true
  },
  {
    uid: 'customer.name',
    label: 'Нийлүүлэгч',
    name: 'supplier',
    fieldType: 'autocomplete',
    placeholder: 'Нийлүүлэгч',
    options: props?.supplierOptions || []
  },
  {
    uid: 'barCode',
    label: 'Баркод',
    name: 'barCode',
    fieldType: 'input',
    placeholder: 'Баркод',
    isFilter: true
  },
  {
    uid: 'sku',
    label: 'Бүтээгдхүүний SKU',
    name: 'sku',
    fieldType: 'input',
    placeholder: 'Бүтээгдхүүний SKU',
    isFilter: true
  },
  {
    uid: 'brand.name',
    label: 'Брэнд',
    name: 'brand',
    fieldType: 'autocomplete',
    placeholder: 'Брэнд',
    options: props?.brandOptions || [],
    isFilter: true
  },
  {
    uid: 'description',
    label: 'Бүтээгдэхүүний дэлгэрэнгүй',
    name: 'description',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний дэлгэрэнгүй',
    isFilter: true
  },
  {
    uid: 'categories.2.name',
    label: 'Ерөнхий ангилал',
    name: 'generalCategory',
    fieldType: 'autocomplete',
    placeholder: 'Ерөнхий ангилал',
    options: props?.generalCategories || [],
    isFilter: true
  },
  {
    uid: 'categories.1.name',
    label: 'Дэд ангилал',
    name: 'subCategory',
    fieldType: 'autocomplete',
    placeholder: 'Дэд ангилал',
    options: props?.subCategories || [],
    isFilter: true
  },
  {
    uid: 'categories.0.name',
    label: 'Эцсийн ангилал',
    name: 'finalCategory',
    fieldType: 'autocomplete',
    placeholder: 'Эцсийн ангилал',
    options: props?.finalCategories || [],
    isFilter: true
  },
  {
    uid: 'inventory.totalStock',
    label: 'Үлдэгдэл',
    name: 'stock',
    fieldType: 'input',
    placeholder: 'Үлдэгдэл'
  },
  {
    uid: 'adjustedPrice.price',
    label: 'Үнэ',
    name: 'price',
    fieldType: 'input',
    placeholder: 'Үнэ'
  },
  {
    uid: 'inventory.availableStock',
    label: 'Сагслах тоо',
    name: 'availableStock',
    fieldType: 'input',
    placeholder: 'Сагслах тоо'
  },
  {
    uid: 'inCase',
    label: 'Хайрцаган дахь тоо',
    name: 'inCase',
    fieldType: 'input',
    placeholder: 'Хайрцаган дахь тоо'
  },
  {
    uid: 'isAlcohol',
    label: 'Алкохолны төрөл эсэх',
    name: 'isAlcohol',
    fieldType: 'select',
    placeholder: 'Алкохолны төрөл эсэх',
    options: [
      { value: 'true', label: 'Тийм' },
      { value: 'false', label: 'Үгүй' }
    ],
    isFilter: true
  },
  {
    uid: 'cityTax',
    label: 'Хотын татвар төлөх эсэх',
    name: 'cityTax',
    fieldType: 'select',
    placeholder: 'Хотын татвар төлөх эсэх',
    options: [
      { value: 'true', label: 'Тийм' },
      { value: 'false', label: 'Үгүй' }
    ],
    isFilter: true
  }
];

export const CustomerColumns: IColumn[] = [
  { uid: 'name', label: 'Харилцагчийн нэр' },
  { uid: 'id1', label: 'Утасны дугаар' },
  { uid: 'id2', label: 'Худалдааны цэгийн нэр' },
  { uid: 'id3', label: 'Худалдааны цэгийн ерөнхий  байршил' },
  { uid: 'id4', label: 'Худалдааны цэгийн байршил' },
  { uid: 'id5', label: 'Худалдааны цэгийн газарзүйн координат' },
  { uid: 'id6', label: 'Аж ахуйн нэгжийн төрөл' },
  { uid: 'id7', label: 'Худалдааны цэгийн суваг' },
  { uid: 'id8', label: 'Худалдааны цэгийн үндсэн ангилал' },
  { uid: 'id9', label: 'Худалдааны цэгийн үйл ажиллагаа эхлүүлсэн огноо' },
  { uid: 'id12', label: 'Хот/Аймаг' },
  { uid: 'id13', label: 'Дүүрэг/Сум' },
  { uid: 'id14', label: 'Хороо/Баг' },
  { uid: 'id16', label: 'Дэлгэрэнгүй хаяг' },
  { uid: 'id15', label: 'И-мэйл' },
  { uid: 'id17', label: 'Тусгай зөвшөөрөл' },
  { uid: 'id18', label: 'Хариуцсан ХТ код' }
];
