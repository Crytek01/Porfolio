import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { LoadingPage } from './loading.page';

describe('Loading page component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<LoadingPage size={30} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
