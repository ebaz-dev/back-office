import CoreContainer from '@/components/core/CoreContainer';
import ProductsCreateForm from '@/components/products/ProductsCreateForm';

const ProductsCreatePage = async () => {
  return (
    <CoreContainer title='Нэг бүтээгдэхүүний бүртгэл'>
      <ProductsCreateForm />
    </CoreContainer>
  );
};

export default ProductsCreatePage;
