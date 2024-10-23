import { IColumn, IProduct, IProductsFieldProps } from '@/lib/types';

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
    isFilterable: true,
    options: []
  },
  {
    uid: 'orderedAt',
    name: 'images',
    label: 'Захиалсан өдөр',
    placeholder: 'Захиалсан өдөр',
    fieldType: 'datepicker',
    isFilterable: true
  },
  {
    uid: 'deliveryDate',
    name: 'images',
    label: 'Хүргүүлэх өдөр',
    placeholder: 'Хүргүүлэх өдөр',
    fieldType: 'datepicker',
    isFilterable: true
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
    description: 'Олон зураг сонгож болно',
    isCreatable: false
  },
  {
    uid: 'id',
    name: 'id',
    defaultValue: product?.id,
    label: 'Ебазаар бүтээгдэхүүний ID',
    fieldType: 'input',
    placeholder: 'Ебазаар бүтээгдэхүүний ID',
    isFilterable: true,
    isEditable: true
  },
  {
    uid: 'name',
    name: 'name',
    defaultValue: product?.name,
    label: 'Бүтээгдэхүүний нэр',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний нэр',
    isFilterable: true,
    isCreatable: true,
    isEditable: true
  },
  {
    uid: 'barCode',
    name: 'barCode',
    defaultValue: product?.barCode,
    label: 'Бүтээгдэхүүний баркод',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний баркод',
    isFilterable: true,
    isCreatable: true,
    isEditable: true
  },
  {
    uid: 'sku',
    name: 'sku',
    defaultValue: product?.sku,
    label: 'Бүтээгдхүүний SKU',
    fieldType: 'input',
    placeholder: 'Бүтээгдхүүний SKU',
    isFilterable: true,
    isCreatable: true,
    isEditable: true
  },
  {
    uid: 'inventory.totalStock',
    name: 'stock',
    defaultValue: product?.inventory.totalStock,
    label: 'Үлдэгдэл',
    fieldType: 'input',
    placeholder: 'Үлдэгдэл',
    isCreatable: true,
    isEditable: true
  },
  {
    uid: '',
    name: 'price',
    defaultValue: '',
    label: 'Үнэ',
    fieldType: 'input',
    placeholder: 'Үнэ',
    isCreatable: true
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
    ],
    isCreatable: true,
    isEditable: true
  },
  {
    uid: 'customer.name',
    name: 'supplier',
    defaultValue: '',
    label: 'Нийлүүлэгч',
    fieldType: 'autocomplete',
    placeholder: 'Нийлүүлэгч',
    options: props?.supplierOptions || [],
    isCreatable: true
  },
  {
    uid: 'brand.name',
    name: 'brand',
    defaultValue: '',
    label: 'Брэнд',
    fieldType: 'select',
    placeholder: 'Брэнд',
    options: props?.brandOptions || [],
    isCreatable: true
  },
  {
    uid: 'categories.2.name',
    name: 'generalCategory',
    defaultValue: '',
    label: 'Ерөнхий ангилал',
    fieldType: 'autocomplete',
    placeholder: 'Ерөнхий ангилал',
    options: props?.generalCategories || [],
    isCreatable: true
  },
  {
    uid: 'categories.1.name',
    name: 'subCategory',
    defaultValue: '',
    label: 'Дэд ангилал',
    fieldType: 'autocomplete',
    placeholder: 'Дэд ангилал',
    options: props?.subCategories || [],
    isCreatable: true
  },
  {
    uid: 'categories.0.name',
    name: 'finalCategory',
    defaultValue: '',
    label: 'Эцсийн ангилал',
    fieldType: 'autocomplete',
    placeholder: 'Эцсийн ангилал',
    options: props?.finalCategories || [],
    isCreatable: true
  },
  {
    uid: 'unit',
    name: 'unit',
    defaultValue: '',
    label: 'Хэмжих нэгж',
    fieldType: 'select',
    placeholder: 'Хэмжих нэгж',
    options: [],
    isCreatable: true
  },
  {
    uid: 'inventory.availableStock',
    name: 'availableStock',
    defaultValue: product?.inventory.availableStock,
    label: 'Сагслах тоо',
    fieldType: 'input',
    placeholder: 'Сагслах тоо',
    isCreatable: true,
    isEditable: true
  },
  {
    uid: 'inCase',
    name: 'inCase',
    defaultValue: product?.inCase,
    label: 'Хайрцаган дахь тоо',
    fieldType: 'input',
    placeholder: 'Хайрцаган дахь тоо',
    isCreatable: true,
    isEditable: true
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
    ],
    isCreatable: true
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
    ],
    isCreatable: true
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
