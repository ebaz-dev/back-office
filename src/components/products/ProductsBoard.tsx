import { FunctionComponent } from 'react';
import { IBrand, IProduct } from '@/types';
import { Card, CardBody } from '@nextui-org/react';
import ProductsFilterForm from '@/components/products/ProductsFilterForm';
import ProductsTable from '@/components/products/ProductsTable';

interface ProductsBoardProps {
  brands: IBrand[];
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  const { products, totalPage, currentPage, brands } = props;

  const filterOptions = {
    brandId: brands.map(brand => ({
      label: brand.name,
      value: brand.id
    }))
  };

  return (
    <div className='h-full flex flex-col gap-4'>
      <Card>
        <CardBody>
          <ProductsFilterForm />
        </CardBody>
      </Card>

      <ProductsTable {...props} />
    </div>
  );
};

export default ProductsBoard;
