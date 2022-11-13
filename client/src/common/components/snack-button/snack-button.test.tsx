import { shallowRender } from '@common/utils/test/shallowRender';
import { describe, expect, it } from 'vitest';

import { SnackButton } from './snack-button.component';

describe('Snack button component Test', () => {
  it('renders correctly', () => {
    const renderer = shallowRender(
      <SnackButton
        onClickOutside={function (): void {
          throw new Error('Function not implemented.');
        }}
        onMenuItemClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSnackClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        isMenuOpen={false}
        menuOptions={[
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
