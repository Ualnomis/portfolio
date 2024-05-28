import * as React from 'react';
import styled from 'styled-components';
import useMousePosition from '../../hooks/use-mouse-position.hook';

const Eye = ({ ...delegated }) => {
  const mousePosition = useMousePosition();
  const eyeBallRef = React.useRef();
  const [eyeBallTranX, setEyeBallTranX] = React.useState(0);
  const [eyeBallTranY, setEyeBallTranY] = React.useState(0);

  React.useEffect(() => {
    if (!eyeBallRef.current) {
      return;
    }

    const rect = eyeBallRef.current.getBoundingClientRect();
    const nextEyeBallTranX = Math.max(
      -5,
      Math.min((mousePosition.x - rect.left) / 150, 5),
    );
    setEyeBallTranX(nextEyeBallTranX);
    const nextEyeBallTranY = Math.max(
      -5,
      Math.min((mousePosition.y - rect.top) / 150, 5),
    );
    setEyeBallTranY(nextEyeBallTranY);
  }, [mousePosition]);

  return (
    <EyeBall
      ref={eyeBallRef}
      {...delegated}
      style={{
        '--eye-translate3d': `translate3d(${eyeBallTranX}px, ${eyeBallTranY}px, 0px)`,
      }}
    />
  );
};

const EyeBall = styled.div`
  height: 8px;
  width: 8px;
  position: absolute;
  background: black;
  border-radius: 50%;
  transform: var(--eye-translate3d);
`;

export default Eye;
