import { FunctionComponent, useState } from 'react';

import { ImageContainer, Img, Spinner } from './image.styles';

interface IImage {
  optimizedSrc?: string;
  optimizedType?: string;
  src?: string;
  alt?: string;
  type?: string;
  spinnerSize?: number;
  className?: string;
}

export const Image: FunctionComponent<IImage> = ({
  spinnerSize = 50,
  src,
  alt,
  type,
  optimizedSrc,
  optimizedType,
  className,
}) => {
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const onImageLoad: React.ReactEventHandler<HTMLImageElement> = (img) => {
    setLoading(false);
    setDimensions({
      height: img.currentTarget.clientHeight,
      width: img.currentTarget.clientWidth,
    });
  };

  return (
    <ImageContainer className={className}>
      <picture>
        <source srcSet={optimizedSrc} type={optimizedType} />
        <source srcSet={src} type={type} />
        <Img
          onLoad={onImageLoad}
          className={className}
          src={src}
          alt={alt}
          isVisible={!loading}
        />
        {loading ? <Spinner size={spinnerSize} isRunning={loading} /> : null}
      </picture>
    </ImageContainer>
  );
};
