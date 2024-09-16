'use client';

import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import { useFormStatus } from 'react-dom';

interface CoreSubmitButtonProps {
  text: string;
  className?: string;
  isDisabled?: boolean;
}

const CoreSubmitButton: FunctionComponent<CoreSubmitButtonProps> = props => {
  const { text, className, isDisabled } = props;

  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      fullWidth
      color='primary'
      isLoading={pending}
      className={className}
      isDisabled={isDisabled}
    >
      {tr(text)}
    </Button>
  );
};

export default CoreSubmitButton;
