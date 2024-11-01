import CoreGroupImages from '@/components/core/CoreGroupImages';
import { IColumn, IProduct, IProductsFieldProps } from '@/types';

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
      allowSorting: false,
      customCell: (customValue: string[]) => (
        <CoreGroupImages images={customValue} />
      ),
    },
    {
      uid: 'id',
      name: 'id',
      defaultValue: product?.id,
      label: 'Ебазаар бүтээгдэхүүний ID',
      fieldType: 'input',
      placeholder: 'Ебазаар бүтээгдэхүүний ID',
      isFilterable: true,
      isEditable: false,
      isCreatable: false,
      allowSorting: true,
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
      isEditable: true,
      allowSorting: true,
      inputProps: {
        isRequired: true
      },
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
      isEditable: true,
      inputProps: {
        isRequired: true,
        type: 'number'
      }
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
      isEditable: true,
      allowSorting: true,
      inputProps: {
        isRequired: true,
        type: 'number'
      },
    },
    {
      uid: 'inCase',
      name: 'inCase',
      defaultValue: product?.inCase,
      label: 'Хайрцаган дахь тоо',
      fieldType: 'input',
      inputProps: {
        type: 'number'
      },
      placeholder: 'Хайрцаган дахь тоо',
      isCreatable: true,
      isEditable: true
    },
    {
      uid: 'customerId',
      name: 'customerId',
      defaultValue: product?.customerId,
      label: 'Нийлүүлэгч ID',
      fieldType: 'select',
      placeholder: 'Нийлүүлэгч ID',
      options: props?.supplierOptions || [],
      isCreatable: false,
      isEditable: false,
    },
    {
      uid: 'categoryIds',
      name: 'categoryIds',
      // defaultValue: product?.categoryIds,
      label: 'Ангилал ID',
      fieldType: 'select',
      placeholder: 'Ангилал ID',
      options: props?.categoryOptions || [],
      isCreatable: true,
      isEditable: true,
    },
    {
      uid: 'inventory.totalStock',
      name: 'stock',
      defaultValue: product?.inventory?.totalStock,
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
      label: 'Үнэ (price)',
      fieldType: 'input',
      placeholder: 'Үнэ (price)',
      isCreatable: true,
      inputProps: {
        type: 'number'
      },
    },
    {
      uid: 'cost',
      name: 'cost',
      defaultValue: '',
      label: 'Үнэ (cost)',
      fieldType: 'input',
      placeholder: 'Үнэ (cost)',
      isCreatable: true,
      inputProps: {
        type: 'number'
      },
    },
    {
      uid: 'brandId',
      name: 'brandId',
      defaultValue: '',
      label: 'Брэнд',
      fieldType: 'autocomplete',
      placeholder: 'Брэнд',
      options: props?.brandOptions || [],
      isCreatable: true,
      isEditable: true,
      isFilterable: true,
    },
    {
      uid: 'description',
      name: 'description',
      defaultValue: product?.description,
      label: 'Тайлбар',
      fieldType: 'input',
      placeholder: 'Тайлбар',
      isCreatable: true,
      isEditable: true
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
      uid: 'isAlcohol',
      name: 'isAlcohol',
      defaultValue: '',
      label: 'Алкохолны төрөл эсэх',
      fieldType: 'select',
      placeholder: 'Алкохолны төрөл эсэх',
      options: [
        { value: true, label: 'Тийм' },
        { value: false, label: 'Үгүй' }
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
    },
    {
      uid: 'priority',
      name: 'priority',
      defaultValue: product?.priority,
      label: 'Эрэлтийн эрх',
      fieldType: 'input',
      placeholder: 'Эрэлтийн эрх',
      isCreatable: true,
      isEditable: true,
      inputProps: {
        type: 'number'
      }
    }
  ];
