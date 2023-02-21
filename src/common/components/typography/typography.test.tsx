import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Typography } from './typography.component';

describe('Typography component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(
      <Typography
        size="b1"
        weight="bold"
        align="center"
        color="boldGrey"
        lineHeight={1}
      >
        Typo
      </Typography>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
