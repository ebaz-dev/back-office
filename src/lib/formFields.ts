import { IFormField, IOption } from '@/lib/types';

interface ProductsRegFormFieldsProps {
  supplierOptions: IOption[];
  categoryOptions: IOption[];
  brandOptions: IOption[];
}

export const ProductsCreateFormFields = (
  props: ProductsRegFormFieldsProps
): IFormField[] => [
  {
    type: 'autocomplete',
    name: 'supplier_name',
    label: 'Нийлүүлэгч нэр',
    placeholder: 'Нийлүүлэгч нэр',
    options: props.supplierOptions,
    defaultValue: ''
  },
  {
    type: 'autocomplete',
    name: 'product_category',
    label: 'Бүтээгдэхүүний категори',
    placeholder: 'Бүтээгдэхүүний категори',
    options: props.categoryOptions,
    defaultValue: ''
  },
  {
    type: 'autocomplete',
    name: 'product_category',
    label: 'Бүтээгдэхүүний брэнд',
    placeholder: 'Бүтээгдэхүүний брэнд',
    options: props.brandOptions,
    defaultValue: ''
  },
  {
    type: 'input',
    name: 'product_name',
    label: 'Бүтээгдэхүүний нэр',
    placeholder: 'Бүтээгдэхүүний нэр',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Бүтээгдэхүүний дэлгэрэнгүй бичиглэл',
    placeholder: 'Бүтээгдэхүүний дэлгэрэнгүй бичиглэл',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Бүтээгдэхүүний sku',
    placeholder: 'Бүтээгдэхүүний sku',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Бүтээгдэхүүний barcode',
    placeholder: 'Бүтээгдэхүүний barcode',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Сагслах тоо хэмжээ /ш/',
    placeholder: 'Сагслах тоо хэмжээ /ш/',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Бүтээгдэхүүний жин',
    placeholder: 'Бүтээгдэхүүний жин',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Бүтээгдэхүүний үнэ',
    placeholder: 'Бүтээгдэхүүний үнэ',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: '',
    label: 'Бүтээгдэхүүний үлдэгдэл тоо',
    placeholder: 'Бүтээгдэхүүний үлдэгдэл тоо',
    options: [],
    defaultValue: ''
  },
  {
    type: 'select',
    name: '',
    label: 'Алкохол төрөл',
    placeholder: 'Алкохол төрөл',
    options: [
      { value: '1', label: 'Тийм' },
      { value: '2', label: 'Үгүй' }
    ],
    defaultValue: ''
  },
  {
    type: 'select',
    name: '',
    label: 'НӨАТ',
    placeholder: 'НӨАТ',
    options: [
      { value: '1', label: 'Тийм' },
      { value: '2', label: 'Үгүй' }
    ],
    defaultValue: ''
  },
  {
    type: 'select',
    name: '',
    label: 'Хотын татвар',
    placeholder: 'Хотын татвар',
    options: [
      { value: '1', label: 'Тийм' },
      { value: '2', label: 'Үгүй' }
    ],
    defaultValue: ''
  }
];
