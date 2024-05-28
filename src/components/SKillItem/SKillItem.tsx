import styled from 'styled-components';
import { SkillItemProps } from '../../types';

const SKillItem = ({ icon: Icon, text }: SkillItemProps) => {
  return (
    <SkillItem>
      <SkillItemIcon>
        <Icon />
      </SkillItemIcon>
      <SkillItemText>{text}</SkillItemText>
    </SkillItem>
  );
};

const SkillItemIcon = styled.div`
  font-size: 4rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillItemText = styled.div``;

export default SKillItem;
