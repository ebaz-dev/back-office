'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';

interface CoreBackButtonProps {
  className?: string;
}

const CoreBackButton: FunctionComponent<CoreBackButtonProps> = ({ className }) => {
  const router = useRouter();

  return (
    <Button
      isIconOnly
      variant="light"
      className={className}
      size="md"
      onPress={() => router.back()}
      title='Back'
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </Button>
  );
};

export default CoreBackButton; 