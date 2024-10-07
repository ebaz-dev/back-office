import { IProduct } from '@/lib/types';
import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoreImage from '@/components/core/CoreImage';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Tab, Tabs } from '@nextui-org/react';
import ProductsEditForm from '@/components/products/ProductsEditForm';

interface ProductsDetailProps {
  product: IProduct;
}

const ProductsDetail: FunctionComponent<ProductsDetailProps> = props => {
  const { product } = props;

  return (
    <div className='grid grid-cols-2'>
      <div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className='h-96 w-full'
        >
          {product.images.map((imageUrl: string, index: number) => {
            return (
              <SwiperSlide key={index} className='h-full w-full'>
                <CoreImage src={imageUrl} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className='flex flex-col gap-4'>
        <h3 className='font-bold'>{product.name}</h3>

        <Tabs
          aria-label='Options'
          fullWidth
          color='primary'
          variant='underlined'
          classNames={{ cursor: 'w-full' }}
        >
          <Tab key='info' title='Дэлгэрэнгүй мэдээлэл'>
            Photos
          </Tab>
          <Tab key='edit' title='Засварлах'>
            <ProductsEditForm />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsDetail;
