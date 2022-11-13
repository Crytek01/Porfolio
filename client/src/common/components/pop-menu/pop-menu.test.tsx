import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { PopMenu } from './pop-menu.component';

describe('Pop menu component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(
      <PopMenu
        isMenuOpen={false}
        onItemClick={function (): void {
          console.log();
        }}
        options={[
          {
            name: 'Test1',
            route: '/test1',
          },
          {
            name: 'Test2',
            route: '/test2',
          },
          {
            name: 'Test3',
            route: '/test3',
            isExternal: true,
            target: '_blank',
          },
        ]}
      />
    );

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
