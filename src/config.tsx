export const API_URL = process.env.API_URL;

export const MEDIA_URL = process.env.MEDIA_URL;

export const MEDIA_UPLOAD = process.env.MEDIA_UPLOAD;

export const NextImageSizes = '(max-width: 768px) 100vw, 33vw';

export const MenuList = [
  {
    icon: 'dashboard',
    label: 'Хяналтын самбар',
    pathname: '/dashboard'
  },
  {
    icon: 'order',
    label: 'Захиалга',
    pathname: '/orders'
  },
  {
    icon: 'products',
    label: 'Бүтээгдэхүүн',
    pathname: '/products'
  },
  {
    icon: 'merchants',
    label: 'Харилцагч',
    pathname: '/merchants'
  },
  {
    icon: 'notifications',
    label: 'Мэдэгдэл',
    pathname: '/notifications'
  },
  {
    icon: 'feedback',
    label: 'Санал хүсэлт',
    pathname: '/feedback'
  }
];
