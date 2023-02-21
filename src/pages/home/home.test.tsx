import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import HomePage from './home.page';

describe('Home page component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<HomePage />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
