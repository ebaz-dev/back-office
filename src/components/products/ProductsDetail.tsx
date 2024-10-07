import { IProduct } from '@/lib/types';
import { FunctionComponent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoreImage from '@/components/core/CoreImage';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

interface ProductsDetailProps {
  product: IProduct;
}

const ProductsDetail: FunctionComponent<ProductsDetailProps> = props => {
  const { product } = props;

  return (
    <div className='grid grid-cols-2'>
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
  );
};

export default ProductsDetail;
