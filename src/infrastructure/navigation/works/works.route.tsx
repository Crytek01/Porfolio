import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import WorkDetailsPage from '@pages/works/pages/work-detail/work-detail.page';
import WorksPage from '@pages/works/works.page';

export const WorksRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route index element={<WorksPage />} />
      <Route path=":name" element={<WorkDetailsPage />} />
    </Routes>
  );
};

export default WorksRoutes;
