import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Link } from './link.component';

describe('Link component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<Link>Link</Link>);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
