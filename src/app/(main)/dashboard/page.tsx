import DashboardBoard from '@/components/dashboard/DashboardBoard';
import { FunctionComponent } from 'react';

interface DashboardPageProps {}

const DashboardPage: FunctionComponent<DashboardPageProps> = async () => {
  return <DashboardBoard />;
};

export default DashboardPage;
