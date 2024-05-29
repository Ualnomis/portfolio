import styled from 'styled-components';
import { SkillItemProps } from '../../types';
import { motion } from 'framer-motion';

const SkillItem = ({
  icon: Icon,
  text,
  ...delegated
}: Omit<SkillItemProps, 'type'>) => {
  return (
    <Wrapper {...delegated}>
      <SkillItemIcon>
        <Icon aria-hidden={true} />
      </SkillItemIcon>
      <SkillItemText>{text}</SkillItemText>
    </Wrapper>
  );
};

const SkillItemIcon = styled.div`
  font-size: 4rem;
`;

const Wrapper = styled(motion.div)<{
  layout?: boolean | 'size' | 'position' | 'preserve-aspect';
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillItemText = styled.div``;

export default SkillItem;
