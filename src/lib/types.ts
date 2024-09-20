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
  attributes: IProductAttribute[];
  inCase: number;
  createdAt: string | Date;
  updatedAt: string | Date;
  inventoryId: string;
  inventory: {
    totalStock: number;
    reservedStock: number;
    availableStock: number;
    id: string;
  };
  adjustedPrice: { price: number; cost: number };
  id: string;
}
