'use client';

import { cn } from '@/lib/utils';
import { FunctionComponent, ReactNode } from 'react';

interface CoreContainerProps {
  children: ReactNode;
  className?: string;
  title?: string;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
}

const CoreContainer: FunctionComponent<CoreContainerProps> = ({
  children,
  className,
  title,
  headerContent,
  footerContent
}) => {
  return (
    <div
      className={cn(
        'w-full h-[calc(100vh-140px)] bg-background rounded-lg',
        className
      )}
    >
      {/* Header Section */}
      {(title || headerContent) && (
        <div className='flex items-center justify-between p-4 border-b'>
          {title && <h1 className='text-xl font-medium'>{title}</h1>}
          {headerContent}
        </div>
      )}

      {/* Main Content */}
      <div
        className={cn(
          'flex-1 p-4 overflow-auto',
          !footerContent && 'h-[calc(100%-70px)]',
          !title && !headerContent && 'h-full'
        )}
      >
        {children}
      </div>

      {/* Footer Section */}
      {footerContent && <div className='p-4 border-t'>{footerContent}</div>}
    </div>
  );
};

export default CoreContainer;
