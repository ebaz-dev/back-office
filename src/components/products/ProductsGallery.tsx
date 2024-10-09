import { FunctionComponent } from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoreImage from '@/components/core/CoreImage';
import { IProduct } from '@/lib/types';

interface ProductsGalleryProps {
  product: IProduct;
}

const ProductsGallery: FunctionComponent<ProductsGalleryProps> = props => {
  const { product } = props;

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className='mySwiper h-96'
    >
      {product.images.map((imageUrl: string, index: number) => (
        <SwiperSlide key={index} className='w-96 h-full'>
          <CoreImage src={imageUrl} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsGallery;
