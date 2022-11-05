import 'styled-components';

import { theme } from '../infrastructure/theme';

type ITheme = typeof theme;
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
