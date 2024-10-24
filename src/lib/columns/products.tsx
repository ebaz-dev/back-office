import CoreGroupImages from '@/components/core/CoreGroupImages';
import { IColumn, IProduct, IProductsFieldProps } from '@/lib/types';

export const ProductsColumns = (
  props?: IProductsFieldProps,
  product?: IProduct
): IColumn[] => [
  {
    uid: 'images',
    name: 'images',
    label: 'Зураг',
    fieldType: 'file',
    placeholder: 'Зураг',
    description: 'Олон зураг сонгож болно',
    isCreatable: false,
    customCell: (customValue: any) => {
      return <CoreGroupImages images={customValue} />;
    }
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
    uid: 'price',
    name: 'price',
    defaultValue: '',
    label: 'Үнэ',
    fieldType: 'input',
    placeholder: 'Үнэ',
    isCreatable: true
  },
  {
    uid: 'customer.name',
    name: 'supplier',
    defaultValue: product?.customer.name,
    label: 'Нийлүүлэгч',
    fieldType: 'autocomplete',
    placeholder: 'Нийлүүлэгч',
    options: props?.supplierOptions || [],
    isCreatable: true,
    isEditable: true
  },
  {
    uid: 'brand.name',
    name: 'brand',
    defaultValue: '',
    label: 'Брэнд',
    fieldType: 'autocomplete',
    placeholder: 'Брэнд',
    options: props?.brandOptions || [],
    isCreatable: true,
    isFilterable: true
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
    uid: 'isActive',
    name: 'isActive',
    defaultValue: product?.isActive.toString(),
    label: 'Төлөв',
    fieldType: 'select',
    placeholder: 'Төлөв',
    options: [
      { value: 'true', label: 'Идэвхтэй' },
      { value: 'false', label: 'Идэвхгүй' }
    ],
    isCreatable: true,
    isEditable: true
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
