'use client';

import { loginAction } from '@/app/actions/auth';
import { tr } from '@/lib/utils';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Input } from '@nextui-org/react';
import { FunctionComponent, useState } from 'react';
import { useFormState } from 'react-dom';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';

interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  const [state, action] = useFormState(loginAction, undefined);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <form action={action} className='flex flex-col gap-4'>
      <Input
        name='username'
        variant='bordered'
        type='text'
        label={tr('Нэвтрэх нэр')}
        placeholder='Enter your username'
        isInvalid={state?.errors?.username && true}
        errorMessage={state?.errors?.username && state.errors.username}
      />

      <Input
        name='password'
        label={tr('Нууц үг')}
        variant='bordered'
        placeholder='Enter your password'
        endContent={
          <div onClick={toggleVisibility} className='cursor-pointer'>
            {isVisible ? (
              <EyeIcon className='w-6 h-6 text-default-400' />
            ) : (
              <EyeSlashIcon className='w-6 h-6 text-default-400' />
            )}
          </div>
        }
        type={isVisible ? 'text' : 'password'}
        isInvalid={state?.errors?.password && true}
        errorMessage={state?.errors?.password && state.errors.password}
      />

      <CoreSubmitButton text='Нэвтрэх' />
    </form>
  );
};

export default LoginForm;
