import { IColumn, IProductsFieldProps } from '@/lib/types';

export const OrderColumns = (props?: IProductsFieldProps): IColumn[] => [
  {
    uid: 'id',
    label: 'Захиалгын дугаар',
    name: 'id',
    fieldType: 'input',
    isFilter: true,
    placeholder: 'Захиалгын дугаар'
  },
  {
    uid: 'merchant.tradeShops.0._id',
    label: 'Trade shop ID',
    name: 'tradeshopId',
    fieldType: 'input',
    isFilter: false,
    placeholder: 'Trade shop ID'
  },
  {
    uid: 'supplier.name',
    label: 'Нийлүүлэгч'
  },
  {
    uid: 'products.0.images.0',
    label: 'Захиалгын зураг'
  },
  {
    uid: 'status',
    label: 'Захиалгын төлөв',
    name: 'status',
    fieldType: 'select',
    isFilter: true,
    placeholder: 'Захиалгын төлөв',
    options: []
  },
  {
    uid: 'orderedAt',
    label: 'Захиалсан өдөр',
    name: 'images',
    fieldType: 'datepicker',
    isFilter: true
  },
  {
    uid: 'deliveryDate',
    label: 'Хүргүүлэх өдөр ',
    name: 'images',
    fieldType: 'datepicker',
    isFilter: true
  },
  {
    uid: '7',
    label: 'Захиалгын дүн'
  },
  {
    uid: '8',
    label: 'Төлөгдсөн дүн'
  },
  {
    uid: 'paymentMethod',
    label: 'Төлбөрийн хэлбэр',
    placeholder: 'Төлбөрийн хэлбэр',
    name: 'paymentMethod',
    fieldType: 'select',
    options: [],
    isFilter: false
  },
  {
    uid: '11',
    label: 'Тэмдэглэл'
  },
  {
    uid: 'channel',
    label: 'Бизнесийн суваг',
    name: 'channel',
    fieldType: 'select',
    options: [],
    isFilter: false
  },
  {
    uid: 'merchant.phone',
    label: 'Утасны дугаар',
    name: 'merchant.phone',
    fieldType: 'input',
    placeholder: 'Утасны дугаар',
    isFilter: false
  },
  {
    uid: 'merchant.name',
    label: 'Харилцагчийн нэр'
  },
  {
    uid: '15',
    label: 'Хот/аймаг',
    name: 'images',
    fieldType: 'select',
    options: [],
    placeholder: 'Хот/аймаг',
    isFilter: false
  },
  {
    uid: '16',
    label: 'Дүүрэг/сум',
    name: 'images',
    fieldType: 'select',
    options: [],
    placeholder: 'Дүүрэг/сум',
    isFilter: false
  },
  {
    uid: '17',
    label: 'Хороо/Баг',
    name: 'images',
    fieldType: 'select',
    options: [],
    placeholder: 'Хороо/Баг',
    isFilter: false
  },
  {
    uid: 'address',
    label: 'Дэлгэрэнгүй хаяг',
    name: 'address',
    fieldType: 'input',
    isFilter: false
  },
  {
    uid: '101',
    label: 'Бүсчлэл',
    placeholder: 'Бүсчлэл',
    name: 'images',
    fieldType: 'select',
    options: [],
    isFilter: false
  },
  {
    uid: '10',
    label: 'Купон',
    placeholder: 'Купон',
    name: 'coupon',
    fieldType: 'input',
    isFilter: false
  },
  {
    uid: '102',
    label: 'Захиалгын эх үүсвэр',
    placeholder: 'Захиалгын эх үүсвэр',
    name: 'images',
    fieldType: 'select',
    options: [],
    isFilter: false
  },
  {
    uid: '22',
    label: 'Худалдааны төлөөлөгийн код',
    name: 'images',
    fieldType: 'file',
    isFilter: false
  },
  {
    uid: '23',
    label: 'Түгээгчийн код',
    name: 'images',
    fieldType: 'file',
    isFilter: false
  },
  {
    uid: '19',
    label: 'НӨАТ'
  },
  {
    uid: '20',
    label: 'Буцаалт',
    name: 'images',
    fieldType: 'file',
    isFilter: false
  },
  {
    uid: '21',
    label: 'Шуурхай түгээлт'
  },
  {
    uid: '24',
    label: 'Агуулах',
    name: 'images',
    fieldType: 'file',
    isFilter: false
  }
];

export const ProductsColumns = (props?: IProductsFieldProps): IColumn[] => [
  {
    uid: 'id',
    label: 'Ебазаар бүтээгдэхүүний ID',
    name: 'id',
    fieldType: 'input',
    placeholder: 'Ебазаар бүтээгдэхүүний ID',
    isFilter: true
  },
  {
    uid: 'isActive',
    label: 'Active',
    name: 'isActive',
    fieldType: 'select',
    placeholder: 'Active',
    options: [
      { value: 'true', label: 'Идэвхтэй' },
      { value: 'false', label: 'Идэвхгүй' }
    ],
    isFilter: false
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
    uid: 'name',
    label: 'Бүтээгдэхүүний нэр',
    name: 'name',
    fieldType: 'input',
    placeholder: 'Бүтээгдэхүүний нэр',
    isFilter: true
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
    uid: 'images.0',
    label: 'Зураг',
    name: 'images',
    fieldType: 'file',
    placeholder: 'Зураг',
    isFilter: false
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
    uid: 'categories.2.name',
    label: 'Ерөнхий ангилал',
    name: 'generalCategory',
    fieldType: 'autocomplete',
    placeholder: 'Ерөнхий ангилал',
    options: props?.generalCategories || [],
    isFilter: false
  },
  {
    uid: 'categories.1.name',
    label: 'Дэд ангилал',
    name: 'subCategory',
    fieldType: 'autocomplete',
    placeholder: 'Дэд ангилал',
    options: props?.subCategories || [],
    isFilter: false
  },
  {
    uid: 'categories.0.name',
    label: 'Эцсийн ангилал',
    name: 'finalCategory',
    fieldType: 'autocomplete',
    placeholder: 'Эцсийн ангилал',
    options: props?.finalCategories || [],
    isFilter: false
  },
  {
    uid: 'inventory.totalStock',
    label: 'Үлдэгдэл',
    name: 'stock',
    fieldType: 'input',
    placeholder: 'Үлдэгдэл'
  },
  {
    uid: '',
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
    isFilter: false
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
    isFilter: false
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
