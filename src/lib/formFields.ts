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
    name: 'customerId',
    label: 'Нийлүүлэгч нэр',
    placeholder: 'Нийлүүлэгч нэр',
    options: props.supplierOptions,
    defaultValue: ''
  },
  {
    type: 'autocomplete',
    name: 'categoryId',
    label: 'Бүтээгдэхүүний категори',
    placeholder: 'Бүтээгдэхүүний категори',
    options: props.categoryOptions,
    defaultValue: ''
  },
  {
    type: 'autocomplete',
    name: 'brandId',
    label: 'Бүтээгдэхүүний брэнд',
    placeholder: 'Бүтээгдэхүүний брэнд',
    options: props.brandOptions,
    defaultValue: ''
  },
  {
    type: 'input',
    name: 'name',
    label: 'Бүтээгдэхүүний нэр',
    placeholder: 'Бүтээгдэхүүний нэр',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: 'description',
    label: 'Бүтээгдэхүүний дэлгэрэнгүй бичиглэл',
    placeholder: 'Бүтээгдэхүүний дэлгэрэнгүй бичиглэл',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: 'sku',
    label: 'Бүтээгдэхүүний sku',
    placeholder: 'Бүтээгдэхүүний sku',
    options: [],
    defaultValue: ''
  },
  {
    type: 'input',
    name: 'barCode',
    label: 'Бүтээгдэхүүний barcode',
    placeholder: 'Бүтээгдэхүүний barcode',
    options: [],
    defaultValue: ''
  },
  {
    type: 'select',
    name: 'isAlcohol',
    label: 'Алкохол төрөл',
    placeholder: 'Алкохол төрөл',
    options: [
      { value: true, label: 'Тийм' },
      { value: false, label: 'Үгүй' }
    ],
    defaultValue: ''
  },
  {
    type: 'select',
    name: 'cityTax',
    label: 'Хотын татвар',
    placeholder: 'Хотын татвар',
    options: [
      { value: true, label: 'Тийм' },
      { value: false, label: 'Үгүй' }
    ],
    defaultValue: ''
  }
];
