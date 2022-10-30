import { AnimatePresence } from 'framer-motion';
import { FunctionComponent, lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Container } from '../../../components/common/container/container.styled';
import { LoadingPage } from '../../../pages/loading/loading.component';

const HomePage = lazy(() => import('../../../pages/home/home.page'));
const WorksRoutes = lazy(() => import('../works/works.route'));
const CVPage = lazy(() => import('../../../pages/cv/cv.page'));

export const AppRoutes: FunctionComponent = () => {
  const location = useLocation();

  return (
    <Container>
      <AnimatePresence mode="wait">
        <Suspense
          fallback={<LoadingPage size={100} positionTopPercentage={25} />}
        >
          <Routes key={location.pathname} location={location}>
            <Route index element={<HomePage />} />
            <Route path="works/*" element={<WorksRoutes />} />
            <Route path="cv" element={<CVPage />} />
            <Route path="not-found" element={<div>Not found</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Container>
  );
};
