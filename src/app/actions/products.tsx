'use server';

import { fetcher } from '@/lib/fetch';
import { convertObjectToParam } from '@/lib/utils';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ProductCreateFormSchema } from '@/utils/definitions/products';
import { getCookie } from './cookies';
import { createProduct, updateProduct } from '@/services/products.service';

export async function createProductAction(prevState: any, formData: FormData) {

  // Validate form using Zod
  const validatedFields = ProductCreateFormSchema.safeParse({
    name: formData.get('name'),
    barCode: formData.get('barCode'),
    sku: formData.get('sku'),
    categoryId: formData.get('categoryId'),
    brandId: formData.get('brandId'),
    description: formData.get('description'),
    price: Number(formData.get('price')),
    cost: Number(formData.get('cost')),
    inCase: Number(formData.get('inCase')),
    priority: Number(formData.get('priority')),
    isActive: formData.get('isActive') === "true",
    isAlcohol: formData.get('isAlcohol') === "true",
    cityTax: formData.get('cityTax') === "true",
  });

  // If form validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.',
    };
  }

  // Get the validated data
  const data = validatedFields.data;

  const supplier = await getCookie("supplier");
  const supplierId = supplier ? JSON.parse(supplier).id : "";

  const { categoryIds, cost, price, ...rest } = data;

  const body = {
    prices: {
      price,
      cost
    },
    customerId: supplierId,
    ...rest,
  };

  console.log("Body", body);

  const res = await createProduct(body);
  // try {
  //   await fetcher('/product/bo', 'POST', body).then((res) => {
  //     console.log("Bnuuuu", res);
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  return {
    message: 'Product Created Successfully!',
    errors: {},
  };
}

export async function updateProductAction(formData: FormData) {
  // Validate form using Zod
  const validatedFields = ProductCreateFormSchema.safeParse({
    name: formData.get('name'),
    barCode: formData.get('barCode'),
    sku: formData.get('sku'),
    categoryId: formData.get('categoryId'),
    brandId: formData.get('brandId'),
    description: formData.get('description'),
    price: Number(formData.get('price')),
    cost: Number(formData.get('cost')),
    inCase: Number(formData.get('inCase')),
    priority: Number(formData.get('priority')),
    isActive: formData.get('isActive') === "true",
    isAlcohol: formData.get('isAlcohol') === "true",
    cityTax: formData.get('cityTax') === "true",
  });

  // If form validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Product.',
    };
  }

  const data = validatedFields.data;

  const res = await updateProduct(state.id, data);

  return {
    message: 'Product Updated Successfully!',
    errors: {},
  };
}

export async function filterProductsAction(formData: FormData) {
  const rawFormData = {
    ids: formData.get('id'),
    name: formData.get('name'),
    barCode: formData.get('barCode'),
    sku: formData.get('sku'),
    brands: formData.get('brand')
  };

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`/products?${currentParams}`);
}

export async function updateProductImageAction(item: {
  id: string;
  images: string[];
}) {
  await fetcher(`/product/update/${item.id}`, 'PUT', {
    images: item.images
  });

  revalidatePath('/products');
}

export async function importProductsAction(formData: FormData) {
  console.log(formData);
}
