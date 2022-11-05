import { FunctionComponent } from 'react';

import {
  ErrorImage,
  GeneralErrorContainer,
  Subtitle,
  Title,
} from './general-errors.styles';

export const GeneralErrorPage: FunctionComponent = () => (
  <GeneralErrorContainer>
    <ErrorImage />
    <Title>Something went wrong...</Title>
    <Subtitle>Please try again later.</Subtitle>
  </GeneralErrorContainer>
);
