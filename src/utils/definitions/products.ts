import { z } from 'zod';

export const ProductCreateFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
  barCode: z.string().min(1, { message: 'Bar code is required.' }),
  sku: z.string().min(1, { message: 'SKU is required.' }),
  categoryIds: z.array(z.string()).optional(),
  brandId: z.string().min(1, { message: 'Brand is required.' }),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  attributes: z.array(z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    key: z.string(),
    value: z.number()
  })).optional(),
  price: z.number().min(1, { message: 'Price is required.' }),
  cost: z.number().min(1, { message: 'Cost is required.' }),
  inCase: z.number().optional(),
  priority: z.number().optional(),
  isActive: z.boolean().default(false),
  isAlcohol: z.boolean().default(false),
  cityTax: z.boolean().default(false)
});

// TODO: add all fields
export const ProductUpdateFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long.' }).trim(),
  barCode: z.string().min(1, { message: 'Bar code is required.' }),
});

export type ProductCreateFormState = z.infer<typeof ProductCreateFormSchema>;
