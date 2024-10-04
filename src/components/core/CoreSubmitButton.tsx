'use client';

import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { FunctionComponent, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

interface CoreSubmitButtonProps {
  text: string;
  className?: string;
  isDisabled?: boolean;
  onPress?: () => void;
  startContent?: ReactNode;
}

const CoreSubmitButton: FunctionComponent<CoreSubmitButtonProps> = props => {
  const { text, className, isDisabled, onPress, startContent } = props;

  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      color='primary'
      isLoading={pending}
      className={className}
      isDisabled={isDisabled}
      onPress={onPress}
      startContent={startContent}
    >
      {tr(text)}
    </Button>
  );
};

export default CoreSubmitButton;
