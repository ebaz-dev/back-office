import CoreThemeSwitcher from '@/components/core/CoreThemeSwitcher';
import { FunctionComponent } from 'react';

interface HomePAgeProps {}

const HomePAge: FunctionComponent<HomePAgeProps> = () => {
  return (
    <div>
      <CoreThemeSwitcher />
    </div>
  );
};

export default HomePAge;
