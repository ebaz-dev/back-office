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
