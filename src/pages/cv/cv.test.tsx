import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { CVPage } from './cv.page';

describe('CV page component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<CVPage />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
