import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Spinner } from './spinner.component';

describe('Spinner component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<Spinner size={0} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
