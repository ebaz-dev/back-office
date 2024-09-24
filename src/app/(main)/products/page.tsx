import { getCookie } from '@/app/actions/cookies';
import ProductsBoard from '@/components/products/ProductsBoard';
import { getFetch } from '@/lib/fetch';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: {
    page: string;
    customerId: string;
  };
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams: { page = 1 }
}) => {
  const supplier = await getCookie('supplier');

  const products = await getFetch(
    `/product/list?customerId=${
      supplier ? supplier.id : ''
    }&page=${page}&limit=10`
  );

  const suppliers = await getFetch(
    `/customer/list?name=supplier&page=${page}&limit=10`
  );

  console.log(suppliers, products);

  return (
    <ProductsBoard
      products={products?.data || []}
      totalPages={products?.totalPages}
      currentPage={products?.currentPage}
      suppliers={suppliers?.data || []}
      supplier={supplier}
    />
  );
};

export default ProductsPage;
