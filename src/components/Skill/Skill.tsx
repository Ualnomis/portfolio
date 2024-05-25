import * as React from 'react';
import styled from 'styled-components';
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoDocker,
} from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri';
import {
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SkillItemProps } from '../../types';
import SkillItem from '../SKillItem';
import PageSection from '../PageSection';

const skills: SkillItemProps[] = [
  {
    icon: <IoLogoReact />,
    text: 'React',
  },
  {
    icon: <RiNextjsFill />,
    text: 'Next.js',
  },
  {
    icon: <SiTypescript />,
    text: 'TypeScript',
  },
  {
    icon: <IoLogoJavascript />,
    text: 'JavaScript',
  },
  {
    icon: <IoLogoHtml5 />,
    text: 'HTML',
  },
  {
    icon: <IoLogoNodejs />,
    text: 'NodeJS',
  },
  {
    icon: <SiExpress />,
    text: 'ExpressJS',
  },
  {
    icon: <SiMongodb />,
    text: 'MongoDB',
  },
  {
    icon: <BiLogoPostgresql />,
    text: 'PostgreSQL',
  },
  {
    icon: <IoLogoCss3 />,
    text: 'GraphQL',
  },
  {
    icon: <IoLogoDocker />,
    text: 'Docker',
  },
  {
    icon: <SiStyledcomponents />,
    text: 'Styled Component',
  },
];

const Skill = () => {
  return (
    <PageSection header="Skill">
      <SkillWrapper>
        {skills.map(({ icon, text }: SkillItemProps) => {
          return <SkillItem key={text} icon={icon} text={text} />;
        })}
      </SkillWrapper>
    </PageSection>
  );
};

const SkillWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default Skill;
