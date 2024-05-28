import * as React from 'react';
import styled from 'styled-components';

const SmoothScrollTo = ({
  id,
  callback,
  children,
}: React.PropsWithChildren) => {
  const handleClick = (ev: React.MouseEvent) => {
    // Disable the default anchor-clicking behavior
    // of scrolling to the element
    ev.preventDefault();
    const target = document.querySelector(`#${id}`);
    target?.scrollIntoView({
      top: '96px',
      behavior: 'smooth',
    });
    if (callback) {
      callback();
    }
  };

  return (
    <Link href={`#${id}`} onClick={handleClick}>
      {children}
    </Link>
  );
};

const Link = styled.a`
  opacity: 0.7;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 1;
  }
`;

export default SmoothScrollTo;
