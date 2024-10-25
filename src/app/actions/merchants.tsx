'use server';

import { convertObjectToParam } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function filterMerchantAction(formData: FormData) {
  const rawFormData = {
    name: formData.get('name')
  };

  const currentParams = convertObjectToParam(rawFormData);

  redirect(`/merchants?${currentParams}`);
}
