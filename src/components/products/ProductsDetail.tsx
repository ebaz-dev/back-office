import { IProduct } from '@/lib/types';
import { FunctionComponent } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import ProductsEditForm from '@/components/products/ProductsEditForm';
import ProductsGallery from '@/components/products/ProductsGallery';

interface ProductsDetailProps {
  product: IProduct;
}

const ProductsDetail: FunctionComponent<ProductsDetailProps> = props => {
  const { product } = props;

  return (
    <div className='flex flex-col gap-4'>
      <Tabs
        aria-label='Options'
        fullWidth
        color='primary'
        variant='underlined'
        classNames={{ cursor: 'w-full' }}
      >
        <Tab key='editInfo' title='Дэлгэрэнгүй мэдээлэл'>
          <ProductsEditForm product={product} />
        </Tab>
        <Tab key='photos' title='Бүтээгдэхүүний зурагнууд'>
          <ProductsGallery product={product} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductsDetail;
