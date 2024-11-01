import CoreContainer from "@/components/core/CoreContainer";
import ProductsCreateForm from "@/components/products/ProductsCreateForm";
import { getProductBrands } from "@/services/products.service";

const ProductsCreatePage = async () => {
  const productsBrandsData = await getProductBrands();
  return (
    <CoreContainer title="Нэг бүтээгдэхүүний бүртгэл">
      <ProductsCreateForm
        brands={productsBrandsData?.data || []}
      />
    </CoreContainer>
  );
};

export default ProductsCreatePage;
