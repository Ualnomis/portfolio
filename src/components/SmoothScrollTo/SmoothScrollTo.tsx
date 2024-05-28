import * as React from 'react';
import styled from 'styled-components';
import { SmoothScrollToProps } from '../../types';
import { HEADER_HEIGHT_VALUE } from '../../constants';

const SmoothScrollTo = ({ id, callback, children }: SmoothScrollToProps) => {
  const handleClick = (ev: React.MouseEvent) => {
    ev.preventDefault();
    const target = document.querySelector(`#${id}`);
    if (target) {
      const offset = HEADER_HEIGHT_VALUE;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      if (callback) {
        callback();
      }
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
