/* eslint-disable @typescript-eslint/no-explicit-any */
import { MEDIA_URL } from '@/config';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChipProps } from '@nextui-org/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function tr(text: string) {
  return text;
}

export const formatUnit = (value: string | number, unit: string) => {
  return value ? `${value.toLocaleString()} ${unit}` : `0 ${unit}`;
};

export const getValueByPath = (obj: Record<string, any>, path: string): any => {
  const keys = path.split('.');

  return keys.reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
    obj
  );
};

export const replaceMediaUrl = (imageUrl: string) => `${MEDIA_URL}/${imageUrl}`;

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

export const statusColorMap: Record<string, ChipProps['color']> = {
  created: 'default',
  pending: 'warning',
  cancelled: 'danger',
  confirmed: 'success',
  delivered: 'secondary',
  true: 'success',
  false: 'danger'
};
