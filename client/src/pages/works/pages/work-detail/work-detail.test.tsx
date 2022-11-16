import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import WorkDetailPage from './work-detail.page';

describe('Work details page component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<WorkDetailPage />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
