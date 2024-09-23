export interface IColumn {
  uid: string;
  label: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IFormField {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  options: IOption[];
  defaultValue: string;
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
