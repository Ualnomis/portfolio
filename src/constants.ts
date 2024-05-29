import { ProjectItemProps, SkillItemProps } from './types';
import giftifyImg from './assets/images/giftify.jpg';
import spacemanGameImg from './assets/images/polyu_game_project.gif';
import nftMarketplaceImg from './assets/images/nft_marketplace.png';
import dietApp from './assets/images/food_app.png';
import multiplicationGameImg from './assets/images/mul_game.png';
import monopolyGameImg from './assets/images/monopoly_game.png';

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

export const PROJECTS: ProjectItemProps[] = [
  {
    imgSrc: giftifyImg,
    name: 'Giftify',
    description: 'A eCommerce project allows users to buy and sell gifts.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'PHP', 'MySQL'],
    githubLink: 'https://github.com/Ualnomis/COMP3421-WebProject',
  },
  {
    imgSrc: spacemanGameImg,
    name: 'The Slaughterer Spaceman',
    description:
      'This was a group project, and I was mainly responsible for handling the characters such as movement, attack combos, and attack effects.',
    techStack: ['Unity', 'C#'],
    youtubeLink: 'https://youtu.be/A6s3nRVm89k',
  },
  {
    imgSrc: nftMarketplaceImg,
    name: 'NFT Marketplace',
    description: 'The NFT Marketplace for users to buy and sell NTF.',
    techStack: ['Next.js', 'Solidity', 'Hardhat'],
    githubLink:
      'https://github.com/CSW0126/COMP3334_GroupProject-NFT-Marketplace',
  },
  {
    imgSrc: dietApp,
    name: 'Diet Pal',
    description: 'A mobile app for users to record daily calories absorbed.',
    techStack: ['React Native', 'MongoDB', 'Python', 'YOLO'],
    githubLink: 'https://github.com/CSW0126/Mobile-Diet-App-comp-4342-project',
  },
  {
    imgSrc: monopolyGameImg,
    name: 'Monopoly Game',
    description: 'The TUI Monopoly game that created using Python.',
    techStack: ['Python'],
    githubLink: 'https://github.com/CSW0126/SE_Monopoly',
  },
  {
    imgSrc: multiplicationGameImg,
    name: 'Multiplication Game',
    description:
      'A Multiplication Game that help children learing multiplication interestly.',
    techStack: ['React'],
  },
];
