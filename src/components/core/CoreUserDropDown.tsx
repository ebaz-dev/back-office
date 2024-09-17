'use client';

import { tr } from '@/lib/utils';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react';
import { FunctionComponent } from 'react';
import { logoutAction } from '@/app/actions/auth';

interface CoreUserDropDownProps {}

const CoreUserDropDown: FunctionComponent<CoreUserDropDownProps> = () => {
  return (
    <Dropdown>
      <DropdownTrigger className='cursor-pointer'>
        <Avatar />
      </DropdownTrigger>

      <DropdownMenu aria-label='actions'>
        <DropdownItem key='settings' href='/settings'>
          {tr('Тохиргоо')}
        </DropdownItem>

        <DropdownItem
          key='logout'
          className='text-danger'
          color='danger'
          onPress={() => logoutAction()}
        >
          {tr('Гарах')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CoreUserDropDown;
