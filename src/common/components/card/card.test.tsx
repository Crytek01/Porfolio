import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { Card } from './card.component';

describe('Card component Test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Card
          description="description"
          information="information"
          logoImage={{
            basic: { type: 'png', source: 'basic image' },
            optimized: { type: 'webp', source: 'optimized image' },
          }}
          title="title"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
