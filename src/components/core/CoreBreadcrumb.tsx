'use client';

import { FunctionComponent, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import Link from 'next/link';
import { tr } from '@/lib/utils';

interface CoreBreadcrumbProps { }

const CoreBreadcrumb: FunctionComponent<CoreBreadcrumbProps> = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const segments = pathname.split('/').filter(segment => segment !== '');

    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      const label = tr(segment.charAt(0).toUpperCase() + segment.slice(1));

      return {
        label,
        path,
      };
    });
  }, [pathname]);

  if (breadcrumbs.length <= 0) return null;

  return (
    <Breadcrumbs
      size="sm"
      className="flex items-center gap-2 py-2"
      itemClasses={{
        item: [
          'text-gray-500',
          'data-[current=true]:text-gray-900',
          'text-sm'
        ].join(' '),
        separator: 'text-gray-400',
      }}
    >
      <BreadcrumbItem>
        <Link href="/" className="hover:text-gray-900">Home</Link>
      </BreadcrumbItem>
      {breadcrumbs.map((breadcrumb) => (
        <BreadcrumbItem key={breadcrumb.path}>
          <Link href={breadcrumb.path} className="hover:text-gray-900">
            {breadcrumb.label}
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default CoreBreadcrumb; 