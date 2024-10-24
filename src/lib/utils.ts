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

export const getNestedValue = (obj: any, pathArray: string[]) => {
  return pathArray.reduce((acc, key) => acc?.[key], obj);
};

export function isImagePath(str: string) {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;

  return imageExtensions.test(str);
}

export function isDate(date: string) {
  const newDate: string = new Date(date).toString();

  return newDate !== 'Invalid Date';
}

export const replaceMediaUrl = (imageUrl: string) =>
  `${MEDIA_URL}/original/${imageUrl}`;

export const removeEmptyValuesFromObject = (object: any): any =>
  Object.fromEntries(Object.entries(object).filter(([_, value]) => value));

export const convertObjectToParam = (object: any): string =>
  new URLSearchParams(removeEmptyValuesFromObject(object)).toString();

export const replaceText = (text: string) => {
  if (text === 'created') return 'Хүлээгдэж буй';

  if (text === 'cancelled') return 'Цуцалсан';

  if (text === 'confirmed') return 'Баталгаажуулсан';

  if (text === 'delivered') return 'Хүргэсэн';

  return text;
};
