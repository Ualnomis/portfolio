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
import { SkillItemProps } from './types';

export const HEADER_HEIGHT_VALUE = 96;
export const HEADER_HEIGHT = `--header-height: ${HEADER_HEIGHT_VALUE}px;`;

export const BREAKPOINTS = {
  laptopMax: 1500,
  tabletMax: 768,
  mobileMax: 375,
};

export const QUERIES = {
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
};

export const SKILLS: SkillItemProps[] = [
  { icon: IoLogoReact, text: 'React', type: 'frontend' },
  { icon: RiNextjsFill, text: 'Next.js', type: 'frontend' },
  { icon: SiTypescript, text: 'TypeScript', type: 'lang' },
  { icon: IoLogoJavascript, text: 'JavaScript', type: 'lang' },
  { icon: IoLogoHtml5, text: 'HTML', type: 'lang' },
  { icon: IoLogoNodejs, text: 'NodeJS', type: 'backend' },
  { icon: SiExpress, text: 'ExpressJS', type: 'backend' },
  { icon: SiMongodb, text: 'MongoDB', type: 'backend' },
  { icon: BiLogoPostgresql, text: 'PostgreSQL', type: 'backend' },
  { icon: IoLogoCss3, text: 'GraphQL', type: 'backend' },
  { icon: IoLogoDocker, text: 'Docker', type: 'backend' },
  { icon: SiStyledcomponents, text: 'Styled Component', type: 'frontend' },
];
