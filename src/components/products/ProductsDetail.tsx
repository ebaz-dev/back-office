'use client';

import { IProduct } from '@/types/product.types';
import { FunctionComponent } from 'react';
import { Tab, Tabs } from '@nextui-org/tabs';
import ProductsEditForm from '@/components/products/ProductsEditForm';
import ProductsGallery from '@/components/products/ProductsGallery';

interface ProductsDetailProps {
  product: IProduct;
  type?: 'edit' | 'show';
}

const ProductsDetail: FunctionComponent<ProductsDetailProps> = props => {
  const { product, type = 'show' } = props;

  return (
    <Tabs
      aria-label='Options'
      fullWidth
      color='primary'
      variant='underlined'
      classNames={{
        tabList: "gap-6",
        cursor: "w-full",
        panel: "h-[calc(80vh-120px)]",
        tab: "max-w-fit px-8",
      }}
    >
      <Tab key='editInfo' title='Дэлгэрэнгүй мэдээлэл'>
        <ProductsEditForm
          product={product}
          type={type}
        />
      </Tab>
      <Tab key='photos' title='Бүтээгдэхүүний зурагнууд'>
        <ProductsGallery product={product} />
      </Tab>
    </Tabs>
  );
};

export default ProductsDetail;
