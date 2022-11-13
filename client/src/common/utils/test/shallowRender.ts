import { ReactElement } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

export const shallowRender = (Tree: ReactElement) => {
  const renderer = ShallowRenderer.createRenderer();
  renderer.render(Tree);

  return renderer;
};
