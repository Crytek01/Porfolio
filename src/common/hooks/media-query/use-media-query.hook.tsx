import { useEffect, useRef, useState } from 'react';

export const useMediaQuery = (mediaQuery: string) => {
  const mediaQueryRef = useRef<MediaQueryList>(window.matchMedia(mediaQuery));
  const [match, setMatch] = useState<boolean>(mediaQueryRef.current.matches);

  const matchHandler = ({ matches }: MediaQueryListEvent) => setMatch(matches);

  useEffect(() => {
    mediaQueryRef.current.addEventListener('change', matchHandler);

    const mediaQueryReference = mediaQueryRef.current;

    return () => {
      mediaQueryReference.removeEventListener('change', matchHandler);
    };
  }, []);

  return match;
};
