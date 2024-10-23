'use server';

import { redirect } from 'next/navigation';

export async function filterOrdersAction(formData: FormData) {
  redirect(`/order`);
}
