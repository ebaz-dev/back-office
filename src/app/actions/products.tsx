'use server';

import { getFetch } from '@/lib/fetch';
import { redirect } from 'next/navigation';

export async function filterProductsAction(state: any, formData: FormData) {
  const categoryId = formData.get('categoryId');
  const brandId = formData.get('brandId');
  const name = formData.get('name');
  const id = formData.get('id');
  const customerId = state?.supplierId ? `customerId=${state.supplierId}&` : '';

  redirect(
    `/products?${customerId}categoryId=${categoryId}&brandId=${brandId}&name=${name}&id=${id}`
  );
}

export async function createProductAction(state: any, formData: FormData) {}

export async function importProductsAction(state: any, formData: FormData) {}

export async function getProductAction(id: string) {
  const response = await getFetch(`/product/${id}`);

  return response;
}
