import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';

import { WorkDetailPage } from '../../../pages/works/pages/work-detail/work-detail.page';
import WorksPage from '../../../pages/works/works.page';

export const WorksRoutes: FunctionComponent = () => {
  return (
    <Routes>
      <Route
        index
        element={<WorksPage />}
        handle={{
          crumb: () => <div>Work</div>,
        }}
      />
      <Route
        path=":name"
        element={<WorkDetailPage />}
        handle={{
          crumb: (data: { name: string }) => <div>{data.name}</div>,
        }}
      />
    </Routes>
  );
};

export default WorksRoutes;
