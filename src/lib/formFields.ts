import { IFormField, IOption } from '@/lib/types';

interface ProductsFormFieldsProps {
  brandOptions: IOption[];
  categoryOptions: IOption[];
}

export const ProductsFormFields = (
  props: ProductsFormFieldsProps
): IFormField[] => [
  {
    type: 'input',
    name: 'name',
    label: 'Бүтээгдэхүүний нэр',
    placeholder: 'Бүтээгдэхүүний нэр'
  },
  {
    type: 'input',
    name: 'id',
    label: 'Бүтээгдэхүүний ID',
    placeholder: 'Бүтээгдэхүүний ID'
  },
  {
    type: 'autocomplete',
    name: 'categoryId',
    label: 'Категори',
    placeholder: 'Категори',
    options: props.categoryOptions
  },
  {
    type: 'autocomplete',
    name: 'brandId',
    label: 'Брэнд',
    placeholder: 'Брэнд',
    options: props.brandOptions
  }
];
