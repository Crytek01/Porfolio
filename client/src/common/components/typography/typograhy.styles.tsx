import styled from 'styled-components';

interface ITypoElement {
  $fontSize: string;
  $fontWeight: number;
  $textAlign: string;
  $lineHeight: number;
  $color: string;
}

export const TypoElement = styled.p<ITypoElement>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  text-align: ${({ $textAlign }) => $textAlign};
  color: ${({ $color }) => $color};
  line-height: ${({ $lineHeight }) => $lineHeight};
`;
