'use server';

import { getFetch } from '@/lib/fetch';

export async function createProductAction(state: any, formData: FormData) {}

export async function importProductsAction(state: any, formData: FormData) {}

export async function getProductAction(id: string) {
  const response = await getFetch(`/product/${id}`);

  return response;
}
