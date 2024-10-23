export interface IColumn {
  uid: string;
  name: string;
  label: string;
  description?: string;
  defaultValue?: string | number;
  fieldType?: string;
  placeholder?: string;
  options?: IOption[];
  isFilterable?: boolean;
  isCreatable?: boolean;
  isEditable?: boolean;
}

export interface IOption {
  value: string | number;
  label: string;
}

export interface ICustomer {
  id: string;
  parentId: string;
  name: string;
  regNo: string;
  userId: string;
  address: string;
  phone: string;
  type: string;
  bankAccounts: [];
  createdAt: Date | string;
  updatedAt: Date | string;
  version: number;
}

export interface IFormField {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  options?: IOption[];
}

export interface IProductAttribute {
  attributeId: string;
  name: string;
  slug: string;
  value: string;
}

export interface IProduct {
  name: string;
  slug: string;
  barCode: string;
  sku: string;
  customerId: string;
  categoryIds: string[];
  brandId: string;
  description: string;
  prices: string[];
  images: string[];
  attributes: IAttribute[];
  inCase: number;
  isActive: boolean;
  isAlcohol: boolean;
  cityTax: boolean;
  priority: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  inventoryId: string;
  inventory: IInventory;
  brand: IBrand;
  categories: ICategory[];
  adjustedPrice: {
    price: number;
    cost: number;
  };
  id: string;
  customer: ICustomer;
}

export interface IBrand {
  name: string;
  slug: string;
  customerId: string;
  image: string;
  isActive: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  id: string;
}

export interface IAttribute {
  name: string;
  slug: string;
  key: string;
  value: number | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  id: string;
}

export interface ICategory {
  name: string;
  slug: string;
  parentId: string;
  customerId: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  id: string;
}

export interface IInventory {
  totalStock: number;
  reservedStock: number;
  availableStock: number;
  id: string;
}

export interface IOrder {
  status: string;
  supplierId: string;
  merchantId: string;
  userId: string;
  cartId: string;
  products: IProduct[];
  orderedAt: Date | string;
  deliveryDate: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  version: number;
  id: string;
}

export interface IProductsFieldProps {
  supplierOptions?: IOption[];
  brandOptions?: IOption[];
  generalCategories?: IOption[];
  subCategories?: IOption[];
  finalCategories?: IOption[];
}
