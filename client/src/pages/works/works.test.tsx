import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import WorksPage from './works.page';

describe('Works page component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<WorksPage />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
