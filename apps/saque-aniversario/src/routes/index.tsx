import { Routes } from '@calculadoras/ui/components';
import HomePage from '../pages/Home';

export const AppRoutes: React.FC = () => {
  return <Routes routes={[{ path: '/', element: <HomePage /> }]} />;
};
