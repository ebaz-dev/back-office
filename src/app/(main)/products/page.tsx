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

const getProducts = async (id: string, page: string | number) =>
  await getFetch(`/product/list?customerId=${id}&page=${page}&limit=10`);

const getSuppliers = async () => await getFetch(`/customer/list?name=supplier`);

const ProductsPage: FunctionComponent<ProductsPageProps> = async ({
  searchParams: { page = 1 }
}) => {
  const supplier = await getCookie('supplier');

  const productsData = getProducts(supplier ? supplier.id : '', page);
  const supplierData = getSuppliers();

  const [products, suppliers] = await Promise.all([productsData, supplierData]);

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
