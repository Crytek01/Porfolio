import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { CustomLink } from './custom-link.component';

describe('Link component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<CustomLink>Link</CustomLink>);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
