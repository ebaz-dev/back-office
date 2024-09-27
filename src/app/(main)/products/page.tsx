import { getCookie } from '@/app/actions/cookies';
import ProductsBoard from '@/components/products/ProductsBoard';
import { getCustomers, getProducts } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface ProductsPageProps {
  searchParams: {
    page: string;
    customerId: string;
  };
}

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams: { page = 1, customerId }
}) => {
  const supplierId = customerId || (await getCookie('supplierId')) || '';

  const supplierData = getCustomers('supplier');
  const productsData = getProducts(supplierId, page);

  const [products, suppliers] = await Promise.all([productsData, supplierData]);

  return (
    <ProductsBoard
      products={products?.data || []}
      totalPage={products?.totalPages}
      currentPage={products?.currentPage}
      suppliers={suppliers?.data || []}
      supplierId={supplierId}
    />
  );
};

export default ProductsPage;
