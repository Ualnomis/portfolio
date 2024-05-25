import * as React from 'react';
import styled from 'styled-components';
import MaxWidthWrapper from '../MaxWidthWrapper';
import HTMLStyleTag from '../HTMLStyleTag';
import ProjectItem from '../ProjectItem';
import giftifyImg from '../../assets/images/giftify.jpg';
import spacemanGameImg from '../../assets/images/polyu_game_project.gif';
import nftMarketplaceImg from '../../assets/images/nft_marketplace.png';
import dietApp from '../../assets/images/food_app.png';
import multiplicationGameImg from '../../assets/images/mul_game.png';
import monopolyGameImg from '../../assets/images/monopoly_game.png';

const projects = [
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

const Project = () => {
  return (
    <MaxWidthWrapper>
      <h2>
        <HTMLStyleTag>Projects</HTMLStyleTag>
      </h2>
      <ProjectWrapper>
        {projects.map((project) => {
          return <ProjectItem key={project.name} {...project} />;
        })}
      </ProjectWrapper>
    </MaxWidthWrapper>
  );
};

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export default Project;
