import { IColumn, IProduct, IProductsFieldProps } from '@/lib/types';

export const OrderColumns = (props?: IProductsFieldProps): IColumn[] => [
  {
    uid: 'orderNo',
    name: 'orderNo',
    label: 'Захиалгын дугаар',
    fieldType: 'input',
    placeholder: 'Захиалгын дугаар'
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
    uid: 'products.0.images.0',
    name: 'images',
    label: 'Захиалгын зураг'
  },
  {
    uid: 'status',
    name: 'status',
    label: 'Захиалгын төлөв',
    fieldType: 'select',
    placeholder: 'Захиалгын төлөв',
    options: []
  },
  {
    uid: 'orderedAt',
    name: 'images',
    label: 'Захиалсан өдөр',
    fieldType: 'datepicker'
  },
  {
    uid: 'deliveryDate',
    name: 'images',
    label: 'Хүргүүлэх өдөр ',
    fieldType: 'datepicker'
  },
  {
    uid: '7',
    name: 'total',
    label: 'Захиалгын дүн'
  },
  {
    uid: '8',
    name: 'payed',
    label: 'Төлөгдсөн дүн'
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
    uid: '11',
    name: 'note',
    label: 'Тэмдэглэл'
  },
  {
    uid: 'channel',
    name: 'channel',
    label: 'Бизнесийн суваг',
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
    label: 'Харилцагчийн нэр'
  },
  {
    uid: '15',
    name: 'hot',
    label: 'Хот/аймаг',
    fieldType: 'select',
    options: [],
    placeholder: 'Хот/аймаг'
  },
  {
    uid: '16',
    name: 'aiamg',
    label: 'Дүүрэг/сум',
    fieldType: 'select',
    options: [],
    placeholder: 'Дүүрэг/сум'
  },
  {
    uid: '17',
    label: 'Хороо/Баг',
    name: 'horoo',
    fieldType: 'select',
    options: [],
    placeholder: 'Хороо/Баг'
  },
  {
    uid: 'address',
    name: 'address',
    label: 'Дэлгэрэнгүй хаяг',
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
    fieldType: 'file'
  },
  {
    uid: '23',
    name: 'tugeegch',
    label: 'Түгээгчийн код',
    fieldType: 'file'
  },
  {
    uid: '19',
    name: 'noat',
    label: 'НӨАТ'
  },
  {
    uid: '20',
    name: 'return',
    label: 'Буцаалт',
    fieldType: 'file'
  },
  {
    uid: '21',
    name: 'shuurhai',
    label: 'Шуурхай түгээлт'
  },
  {
    uid: '24',
    name: 'inventory',
    label: 'Агуулах',
    fieldType: 'file'
  }
];

export const ProductsColumns = (
  props?: IProductsFieldProps,
  product?: IProduct
): IColumn[] => [
  {
    uid: 'images.0',
    name: 'images',
    label: 'Зураг',
    fieldType: 'file',
    placeholder: 'Зураг',
    description: 'Олон зураг сонгож болно'
  },
  {
    uid: 'id',
    name: 'id',
    defaultValue: product?.id,
    label: 'Ебазаар бүтээгдэхүүний ID',
    fieldType: 'input',
    placeholder: 'Ебазаар бүтээгдэхүүний ID'
  },
  {
    uid: 'name',
    name: 'name',
    defaultValue: product?.name,
    label: 'Бүтээгдэхүүний нэр',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний нэр'
  },
  {
    uid: 'barCode',
    name: 'barCode',
    defaultValue: product?.barCode,
    label: 'Бүтээгдэхүүний баркод',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний баркод'
  },
  {
    uid: 'sku',
    name: 'sku',
    defaultValue: product?.sku,
    label: 'Бүтээгдхүүний SKU',
    fieldType: 'input',
    placeholder: 'Бүтээгдхүүний SKU'
  },
  {
    uid: 'inventory.totalStock',
    name: 'stock',
    defaultValue: product?.inventory.totalStock,
    label: 'Үлдэгдэл',
    fieldType: 'input',
    placeholder: 'Үлдэгдэл'
  },
  {
    uid: '',
    name: 'price',
    defaultValue: '',
    label: 'Үнэ',
    fieldType: 'input',
    placeholder: 'Үнэ'
  },
  {
    uid: 'isActive',
    name: 'isActive',
    defaultValue: product?.isActive.toString(),
    label: 'Төлөв',
    fieldType: 'select',
    placeholder: 'Active',
    options: [
      { value: 'true', label: 'Идэвхтэй' },
      { value: 'false', label: 'Идэвхгүй' }
    ]
  },
  {
    uid: 'customer.name',
    name: 'supplier',
    defaultValue: '',
    label: 'Нийлүүлэгч',
    fieldType: 'autocomplete',
    placeholder: 'Нийлүүлэгч',
    options: props?.supplierOptions || []
  },
  {
    uid: 'brand.name',
    name: 'brand',
    defaultValue: '',
    label: 'Брэнд',
    fieldType: 'select',
    placeholder: 'Брэнд',
    options: props?.brandOptions || []
  },
  {
    uid: 'categories.2.name',
    name: 'generalCategory',
    defaultValue: '',
    label: 'Ерөнхий ангилал',
    fieldType: 'autocomplete',
    placeholder: 'Ерөнхий ангилал',
    options: props?.generalCategories || []
  },
  {
    uid: 'categories.1.name',
    name: 'subCategory',
    defaultValue: '',
    label: 'Дэд ангилал',
    fieldType: 'autocomplete',
    placeholder: 'Дэд ангилал',
    options: props?.subCategories || []
  },
  {
    uid: 'categories.0.name',
    name: 'finalCategory',
    defaultValue: '',
    label: 'Эцсийн ангилал',
    fieldType: 'autocomplete',
    placeholder: 'Эцсийн ангилал',
    options: props?.finalCategories || []
  },
  {
    uid: 'unit',
    name: 'unit',
    defaultValue: '',
    label: 'Хэмжих нэгж',
    fieldType: 'select',
    placeholder: 'Хэмжих нэгж',
    options: []
  },
  {
    uid: 'inventory.availableStock',
    name: 'availableStock',
    defaultValue: product?.inventory.availableStock,
    label: 'Сагслах тоо',
    fieldType: 'input',
    placeholder: 'Сагслах тоо'
  },
  {
    uid: 'inCase',
    name: 'inCase',
    defaultValue: product?.inCase,
    label: 'Хайрцаган дахь тоо',
    fieldType: 'input',
    placeholder: 'Хайрцаган дахь тоо'
  },
  {
    uid: 'isAlcohol',
    name: 'isAlcohol',
    defaultValue: '',
    label: 'Алкохолны төрөл эсэх',
    fieldType: 'select',
    placeholder: 'Алкохолны төрөл эсэх',
    options: [
      { value: 'true', label: 'Тийм' },
      { value: 'false', label: 'Үгүй' }
    ]
  },
  {
    uid: 'cityTax',
    name: 'cityTax',
    defaultValue: '',
    label: 'Хотын татвар төлөх эсэх',
    fieldType: 'select',
    placeholder: 'Хотын татвар төлөх эсэх',
    options: [
      { value: 'true', label: 'Тийм' },
      { value: 'false', label: 'Үгүй' }
    ]
  }
];

export const CustomerColumns: IColumn[] = [
  { uid: 'name', name: '', label: 'Харилцагчийн нэр' },
  { uid: 'id1', name: '', label: 'Утасны дугаар' },
  { uid: 'id2', name: '', label: 'Худалдааны цэгийн нэр' },
  { uid: 'id3', name: '', label: 'Худалдааны цэгийн ерөнхий  байршил' },
  { uid: 'id4', name: '', label: 'Худалдааны цэгийн байршил' },
  { uid: 'id5', name: '', label: 'Худалдааны цэгийн газарзүйн координат' },
  { uid: 'id6', name: '', label: 'Аж ахуйн нэгжийн төрөл' },
  { uid: 'id7', name: '', label: 'Худалдааны цэгийн суваг' },
  { uid: 'id8', name: '', label: 'Худалдааны цэгийн үндсэн ангилал' },
  {
    uid: 'id9',
    name: '',
    label: 'Худалдааны цэгийн үйл ажиллагаа эхлүүлсэн огноо'
  },
  { uid: 'id12', name: '', label: 'Хот/Аймаг' },
  { uid: 'id13', name: '', label: 'Дүүрэг/Сум' },
  { uid: 'id14', name: '', label: 'Хороо/Баг' },
  { uid: 'id16', name: '', label: 'Дэлгэрэнгүй хаяг' },
  { uid: 'id15', name: '', label: 'И-мэйл' },
  { uid: 'id17', name: '', label: 'Тусгай зөвшөөрөл' },
  { uid: 'id18', name: '', label: 'Хариуцсан ХТ код' }
];
