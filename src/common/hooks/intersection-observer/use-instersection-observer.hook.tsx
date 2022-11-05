import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit
): [React.RefObject<HTMLElement>, boolean] => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleObserver = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    const containerReference = containerRef.current;

    if (containerReference) {
      observer.observe(containerReference);
    }

    return () => {
      if (containerReference) {
        observer.unobserve(containerReference);
      }
    };
  }, [options]);

  return [containerRef, isVisible];
};
