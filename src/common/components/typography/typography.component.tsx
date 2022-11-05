import { FunctionComponent } from 'react';

import { colors } from '../../../infrastructure/theme/colors';
import { fontSize, fontWeight } from '../../../infrastructure/theme/font';
import { sanitizeHTMLText } from '../../utils/text/text.util';
import { NeverTogether } from '../../utils/typescript/type.util';

import { TypoElement } from './typograhy.styles';

type TElement = {
  p: 'p';
  h1: 'h1';
  h2: 'h2';
  h3: 'h3';
  h4: 'h4';
  h5: 'h5';
  h6: 'h6';
};

export const styleSize = {
  h1: fontSize[7],
  h2: fontSize[6],
  h3: fontSize[5],
  h4: fontSize[4],
  h5: fontSize[3],
  h6: fontSize[2],
  b1: fontSize[5],
  b2: fontSize[4],
  b3: fontSize[3],
  b4: fontSize[2],
  b5: fontSize[1],
  b6: fontSize[0],
};

const styleWeight = {
  regular: fontWeight.regular,
  medium: fontWeight.medium,
  semiBold: fontWeight.semibold,
  bold: fontWeight.bold,
};

type TAlignment = {
  center: 'center';
  left: 'left';
  right: 'right';
  justify: 'justify';
};

interface ITypography {
  as?: keyof TElement;
  size?: keyof typeof styleSize;
  weight?: keyof typeof styleWeight;
  align?: keyof TAlignment;
  color?: keyof typeof colors.text;
  lineHeight?: number;
  className?: string;
  innerHtml?: string;
  children?: React.ReactNode;
}

type TTypography = NeverTogether<ITypography, 'children', 'innerHtml'>;

export const Typography: FunctionComponent<TTypography> = ({
  as = 'p',
  size = 'b3',
  weight = 'regular',
  align = 'unset',
  color = 'standartGrey',
  lineHeight = 1,
  className,
  innerHtml,
  children,
}) => {
  const innerHtmlProp = innerHtml
    ? {
        dangerouslySetInnerHTML: {
          __html: sanitizeHTMLText(innerHtml ?? ''),
        },
      }
    : {};

  return (
    <TypoElement
      className={className}
      as={as}
      fontSize={styleSize[size]}
      fontWeight={styleWeight[weight]}
      textAlign={align}
      color={colors.text[color]}
      lineHeight={lineHeight}
      {...innerHtmlProp}
    >
      {children}
    </TypoElement>
  );
};
