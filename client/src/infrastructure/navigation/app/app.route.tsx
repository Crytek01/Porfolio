import { FunctionComponent, lazy, Suspense } from 'react';
import {
  Navigate,
  RouteObject,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import ErrorBoundary from '@common/components/error-boundary/error-boundary.component';
import { Container } from '@layouts/container/container.styled';
import { LoadingPage } from '@pages/loading/loading.page';
import { AnimatePresence } from 'framer-motion';

const HomePage = lazy(() => import('@pages/home/home.page'));
const WorksRoutes = lazy(() => import('../works/works.route'));
const CVPage = lazy(() => import('@pages/cv/cv.page'));

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
  const location = useLocation();

  const Routes = useRoutes(routes, location);

  return (
    <Container>
      <AnimatePresence mode="wait">
        <ErrorBoundary>
          <Suspense
            fallback={<LoadingPage size={100} positionTopPercentage={25} />}
          >
            {Routes}
          </Suspense>
        </ErrorBoundary>
      </AnimatePresence>
    </Container>
  );
};
