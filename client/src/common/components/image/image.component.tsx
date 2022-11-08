import { FunctionComponent, useState } from 'react';

import { ImageContainer, Img, Spinner } from './image.styles';

interface IImage {
  src: string;
  alt: string;
  spinnerSize?: number;
  className?: string;
}

export const Image: FunctionComponent<IImage> = ({
  spinnerSize = 50,
  src,
  alt,
  className,
}) => {
  const [loading, setLoading] = useState(true);

  const onImageLoad = () => setLoading(false);

  return (
    <ImageContainer className={className}>
      <Img
        className={className}
        onLoad={onImageLoad}
        src={src}
        alt={alt}
        isVisible={!loading}
      />
      {loading ? <Spinner size={spinnerSize} isRunning={loading} /> : null}
    </ImageContainer>
  );
};
