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
  { icon: 'logos:react', text: 'React', type: 'frontend' },
  { icon: 'logos:nextjs-icon', text: 'Next.js', type: 'frontend' },
  { icon: 'logos:typescript-icon', text: 'TypeScript', type: 'lang' },
  { icon: 'logos:javascript', text: 'JavaScript', type: 'lang' },
  { icon: 'devicon:html5', text: 'HTML', type: 'lang' },
  { icon: 'logos:css-3', text: 'CSS', type: 'lang' },
  { icon: 'logos:nodejs-icon', text: 'NodeJS', type: 'backend' },
  { icon: 'skill-icons:expressjs-light', text: 'ExpressJS', type: 'backend' },
  { icon: 'logos:mongodb-icon', text: 'MongoDB', type: 'backend' },
  { icon: 'logos:postgresql', text: 'PostgreSQL', type: 'backend' },
  { icon: 'logos:graphql', text: 'GraphQL', type: 'lang' },
  { icon: 'logos:docker-icon', text: 'Docker', type: 'backend' },
  {
    icon: 'skill-icons:styledcomponents',
    text: 'Styled Component',
    type: 'frontend',
  },
  { icon: 'logos:redux', text: 'Redux', type: 'frontend' },
  { icon: 'tabler:brand-react-native', text: 'React Native', type: 'frontend' },
  { icon: 'logos:python', text: 'Python', type: 'lang' },
  { icon: 'logos:php', text: 'PHP', type: 'lang' },
  { icon: 'devicon:jquery', text: 'jQuery', type: 'frontend' },
];
