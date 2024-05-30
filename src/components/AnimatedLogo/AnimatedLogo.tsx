import * as React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import styled from 'styled-components';
import HTMLStyleTag from '../HTMLStyleTag';
import useTimeout from '../../hooks/use-timeout.hook';

const AnimatedLogo = () => {
  const id = React.useId();
  const [text, setText] = React.useState<string>('SimonLau');
  const [isAnimated, setIsAnimated] = React.useState<boolean>(false);

  useTimeout(() => {
    setText('simonlaU');
    setIsAnimated(true);
  }, 500);

  return (
    <LayoutGroup>
      <LogoWrapper>
        <HTMLStyleTag>
          <CharacterWrapper layout={true} $isAnimated={isAnimated}>
            {text.split('').map((char, index) => {
              return (
                <motion.span
                  aria-hidden={true}
                  layoutId={`${id}-${index}`}
                  key={`${id}-${index}`}
                  layout={true}
                >
                  {char}
                </motion.span>
              );
            })}
          </CharacterWrapper>
        </HTMLStyleTag>
      </LogoWrapper>
    </LayoutGroup>
  );
};

const CharacterWrapper = styled(motion.div)<{ $isAnimated: boolean }>`
  display: inline-flex;
  flex-direction: ${(props) => {
    return props.$isAnimated ? 'row-reverse' : 'row';
  }};
`;

const LogoWrapper = styled.div`
  font-size: 2rem;
  font-size: clamp(2rem, 1.1626794258373208rem + 3.827751196172249vw, 3rem);
  color: var(--color-primary);
`;

export default AnimatedLogo;
