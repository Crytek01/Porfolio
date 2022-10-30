import { FunctionComponent } from 'react';
import { IImage } from '../../../contexts/works/works.service';
import {
  CardContainer,
  CardImage,
  CardInformation,
  CardTitle,
  TextContainer,
} from './card.styles';

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
    <picture>
      <source srcSet={logoImage.basic.source} type={logoImage.basic.type} />
      <source
        srcSet={logoImage.optimized.source}
        type={logoImage.optimized.type}
      />
      <CardImage alt={description} src={logoImage.basic.source} />
    </picture>

    <TextContainer>
      <CardTitle>{title}</CardTitle>

      <CardInformation>{information}</CardInformation>
    </TextContainer>
  </CardContainer>
);
