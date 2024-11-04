'use client';

import { FunctionComponent } from "react";
import CoreSubmitButton from "@/components/core/CoreSubmitButton";
import { ProductsColumns } from "@/lib/columns/products";
import CoreFormFields from "@/components/core/CoreFormFields";
import { IProduct } from "@/types/product.types";
import { updateProductAction } from "@/app/actions/products";
import { useFormState } from "react-dom";
import { Card, CardBody } from "@nextui-org/react";

interface ProductsEditFormProps {
  product: IProduct;
  type: "edit" | "show";
}

const ProductsEditForm: FunctionComponent<ProductsEditFormProps> = ({
  product,
  type,
}) => {
  const [state, action] = useFormState(
    (_state: any, formData: FormData) => updateProductAction(product.id, formData),
    undefined
  );

  return (
    <form
      className="flex flex-col gap-4"
      action={action}
    >
      {state?.message && (
        <Card className='bg-danger text-white text-xs'>
          <CardBody>{state?.message}</CardBody>
        </Card>
      )}
      <div className="grid grid-cols-3 gap-4">
        <CoreFormFields
          fields={ProductsColumns({}, product)}
          className="max-w-xs"
          type={type}
          errors={state?.errors}
        />
      </div>
      {type === "edit" && (
        <CoreSubmitButton text="Хадгалах" className="w-full" />
      )}
    </form>
  );
};

export default ProductsEditForm;
