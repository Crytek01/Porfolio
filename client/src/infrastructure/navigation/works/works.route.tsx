import { FunctionComponent, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const WorksPage = lazy(() => import('@pages/works/works.page'));
const WorkDetailsPage = lazy(
  () => import('@pages/works/pages/work-detail/work-detail.page')
);

export const WorksRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route index element={<WorksPage />} />
      <Route path=":name" element={<WorkDetailsPage />} />
    </Routes>
  );
};

export default WorksRoutes;
