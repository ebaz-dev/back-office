'use server';

export async function productRegAction(state: any, formData: FormData) {
  console.log(formData.get('product_image'));
}
