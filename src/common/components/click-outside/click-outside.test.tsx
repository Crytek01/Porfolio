import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import { ClickOutside } from './click-outside.component';

describe('Click outside component Test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ClickOutside
          onClickOutside={() => {
            console.log();
          }}
        >
          <div></div>
        </ClickOutside>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
