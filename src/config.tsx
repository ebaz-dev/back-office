import { RESOURCES } from '@/constants/common';

export const API_URL = process.env.API_URL;

export const MEDIA_URL = process.env.MEDIA_URL;

export const MEDIA_UPLOAD = process.env.MEDIA_UPLOAD;

export const NextImageSizes = '(max-width: 768px) 100vw, 33vw';

export const MenuList = [
  {
    icon: 'dashboard',
    label: 'Хяналтын самбар',
    pathname: '/dashboard',
    resource: RESOURCES.DASHBOARD
  },
  {
    icon: 'order',
    label: 'Захиалга',
    pathname: '/orders',
    resource: RESOURCES.ORDER
  },
  {
    icon: 'products',
    label: 'Бүтээгдэхүүн',
    pathname: '/products',
    resource: RESOURCES.PRODUCT
  },
  {
    icon: 'merchants',
    label: 'Харилцагч',
    pathname: '/merchants',
    resource: RESOURCES.MERCHANT
  },
  {
    icon: 'notification',
    label: 'Мэдэгдэл',
    pathname: '/notification',
    resource: RESOURCES.NOTIFICATION
  },
  {
    icon: 'feedback',
    label: 'Санал хүсэлт',
    pathname: '/feedback',
    resource: RESOURCES.FEEDBACK
  }
];
