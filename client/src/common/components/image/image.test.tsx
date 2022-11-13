import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Image } from './image.component';

describe('Image component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<Image />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
