import { MEDIA_URL } from '@/config';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tr(text: string) {
  return text;
}

export const formatUnit = (value: string | number, unit: string) => {
  return value ? `${value.toLocaleString()} ${unit}` : `0 ${unit}`;
};

export const getNestedValue = <T>(
  obj: T,
  pathArray: string[]
): T | undefined | unknown => {
  return pathArray.reduce<unknown | undefined>((acc, key) => {
    if (typeof acc === 'object' && acc !== null && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export const replaceMediaUrl = (imageUrl: string) =>
  `${MEDIA_URL}/original/${imageUrl}`;

export const removeEmptyValuesFromObject = (object: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(object).filter(
      ([, value]) => value !== null && value !== undefined && value !== ''
    )
  );

export const convertObjectToParam = (object: Record<string, unknown>): string =>
  new URLSearchParams(
    Object.entries(removeEmptyValuesFromObject(object)).map(([key, value]) => [
      key,
      String(value)
    ])
  ).toString();

export const replaceText = (text: string) => {
  if (text === 'created') return 'Үүсгэсэн';

  if (text === 'pending') return 'Хүлээгдэж буй';

  if (text === 'cancelled') return 'Цуцалсан';

  if (text === 'confirmed') return 'Баталгаажуулсан';

  if (text === 'delivered') return 'Хүргэсэн';

  return text;
};
