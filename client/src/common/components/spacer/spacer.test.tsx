import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Spacer } from './spacer.component';

describe('Spacer component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<Spacer position="bottom" size={10} />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
