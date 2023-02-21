import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { GeneralErrorPage } from './general-error.page';

describe('General page component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(<GeneralErrorPage />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
