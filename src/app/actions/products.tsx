'use server';

import { getFetch } from '@/lib/fetch';
import { redirect } from 'next/navigation';

export async function filterProductsAction(state: any, formData: FormData) {
  console.log(formData);

  redirect(`/products`);
}

export async function createProductAction(state: any, formData: FormData) {}

export async function importProductsAction(state: any, formData: FormData) {}

export async function getProductAction(id: string) {
  const response = await getFetch(`/product/${id}`);

  return response;
}
