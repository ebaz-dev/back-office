'use client';

import CoreContainer from "@/components/core/CoreContainer";
import ProductsCreateForm from "@/components/products/ProductsCreateForm";

import { useRouter } from "next/navigation";

const ProductsCreatePage = () => {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <CoreContainer title="Нэг бүтээгдэхүүний бүртгэл">
      <ProductsCreateForm onClose={onClose} />
    </CoreContainer>
  );
};

export default ProductsCreatePage;
