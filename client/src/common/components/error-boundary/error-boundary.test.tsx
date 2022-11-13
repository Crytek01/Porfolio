import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import ErrorBoundary from './error-boundary.component';

describe('Error Boundary component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(
      <ErrorBoundary>
        <div></div>
      </ErrorBoundary>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
