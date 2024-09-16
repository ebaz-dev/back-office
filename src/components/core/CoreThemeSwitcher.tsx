'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { FunctionComponent } from 'react';
import { Button } from '@nextui-org/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

interface CoreThemeSwitcherProps {}

const CoreThemeSwitcher: FunctionComponent<CoreThemeSwitcherProps> = () => {
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    theme !== 'dark' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Button isIconOnly onClick={changeTheme} className='rounded-full'>
      <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  );
};

export default CoreThemeSwitcher;
