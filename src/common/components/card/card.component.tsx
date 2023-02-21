import { FunctionComponent } from 'react';

import { IImage } from '../../../contexts/works/works.service';
import { Spacer } from '../spacer/spacer.component';
import { Typography } from '../typography/typography.component';

import { CardContainer, CardImage, TextContainer } from './card.styles';

interface ICard {
  logoImage: IImage;
  description: string;
  title: string;
  information: string;
}

export const Card: FunctionComponent<ICard> = ({
  logoImage,
  description,
  title,
  information,
}) => (
  <CardContainer>
    <CardImage
      alt={description}
      src={logoImage.basic.source}
      type={logoImage.basic.type}
      optimizedSrc={logoImage.optimized.source}
      optimizedType={logoImage.optimized.type}
    />

    <TextContainer>
      <Typography as="h3" size="h3" weight="medium" align="center">
        {title}
      </Typography>
      <Spacer size={2} />

      <Typography size="b4" align="center" lineHeight={1.4}>
        {information}
      </Typography>
    </TextContainer>
  </CardContainer>
);
