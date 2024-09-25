import { IProduct } from '@/lib/types';
import { FunctionComponent } from 'react';

interface ProductsDetailProps {
  product: IProduct;
}

const ProductsDetail: FunctionComponent<ProductsDetailProps> = props => {
  const { product } = props;

  return <div>{product.name}</div>;
};

export default ProductsDetail;
