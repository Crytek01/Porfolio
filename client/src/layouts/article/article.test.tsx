import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { Article } from './article.component';

describe('Article component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(
      <Article>
        <div></div>
      </Article>
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
