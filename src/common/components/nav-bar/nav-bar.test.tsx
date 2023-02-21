import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { NavBar } from './nav-bar.component';

describe('Nav bar component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<NavBar />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
