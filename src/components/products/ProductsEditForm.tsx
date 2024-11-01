import { FunctionComponent } from "react";
import CoreSubmitButton from "@/components/core/CoreSubmitButton";
import { ProductsColumns } from "@/lib/columns/products";
import CoreFormFields from "@/components/core/CoreFormFields";
import { IProduct } from "@/types/product.types";
import { updateProductAction } from "@/app/actions/products";

interface ProductsEditFormProps {
  product: IProduct;
  type: "edit" | "show";
}

const ProductsEditForm: FunctionComponent<ProductsEditFormProps> = ({
  product,
  type,
}) => {
  return (
    <form
      className="flex flex-col gap-4"
      action={(formData) => updateProductAction(formData, parseInt(product.id))}
    >
      <div className="grid grid-cols-3 gap-4">
        <CoreFormFields
          fields={ProductsColumns({}, product)}
          className="max-w-xs"
          type={type}
        />
      </div>
      {type === "edit" && (
        <CoreSubmitButton text="Хадгалах" className="w-full" />
      )}
    </form>
  );
};

export default ProductsEditForm;
