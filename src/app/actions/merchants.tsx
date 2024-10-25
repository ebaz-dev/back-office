'use server';

import { convertObjectToParam } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function filterMerchantAction(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    phone: formData.get('phone')
  };

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`/merchants?${currentParams}`);
}
