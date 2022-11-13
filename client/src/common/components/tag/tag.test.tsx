import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Tag } from './tag.component';

describe('Tag component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(
      <Tag backgroundColor="#555" textColor="#484848">
        Tag
      </Tag>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
