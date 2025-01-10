import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesRouter,
} from 'react-router';
import { PageNotFound } from '@calculadoras/ui/components';
import { RoutesProps } from './types';

export const Routes: React.FC<RoutesProps> = ({ routes }) => {
  return (
    <BrowserRouter>
      <RoutesRouter>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </RoutesRouter>
    </BrowserRouter>
  );
};
