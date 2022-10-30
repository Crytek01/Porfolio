import React, { FunctionComponent, useEffect, useRef } from 'react';

interface IClickOutside {
  onClickOutside: () => void;
  children: React.ReactNode;
}

export const ClickOutside: FunctionComponent<IClickOutside> = ({
  onClickOutside,
  children,
}: IClickOutside) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClickEvent = (event: MouseEvent) => {
      const currentElement = elementRef.current;

      if (currentElement && !currentElement.contains(event.target as Node)) {
        onClickOutside && onClickOutside();
      }
    };

    document.addEventListener('click', handleOutsideClickEvent, true);

    return () => {
      document.removeEventListener('click', handleOutsideClickEvent, true);
    };
  }, [onClickOutside]);

  return <div ref={elementRef}>{children}</div>;
};
