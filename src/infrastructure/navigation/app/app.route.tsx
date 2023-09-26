import { FunctionComponent } from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import ErrorBoundary from '@common/components/error-boundary/error-boundary.component';
import { Container } from '@layouts/container/container.styled';
import CVPage from '@pages/cv/cv.page';
import HomePage from '@pages/home/home.page';
import { AnimatePresence } from 'framer-motion';

import WorksRoutes from '../works/works.route';

const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <HomePage />,
  },
  {
    path: 'works/*',
    element: <WorksRoutes />,
  },
  {
    path: 'cv',
    element: <CVPage />,
  },
  {
    path: 'not-found',
    element: <div>Not found</div>,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export const AppRoutes: FunctionComponent = () => {
  const Routes = useRoutes(routes);

  return (
    <Container>
      <AnimatePresence mode="wait">
        <ErrorBoundary>{Routes}</ErrorBoundary>
      </AnimatePresence>
    </Container>
  );
};
