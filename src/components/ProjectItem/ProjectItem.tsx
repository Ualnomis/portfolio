import * as React from 'react';
import styled from 'styled-components';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { ProjectItemProps } from '../../types';
import { IoLogoGithub, IoLogoYoutube } from 'react-icons/io5';

const ProjectItem = ({
  imgSrc,
  name,
  techStack,
  description,
  githubLink,
  youtubeLink,
}: ProjectItemProps) => {
  return (
    <Wrapper>
      <AspectRatio.Root ratio={2 / 1}>
        <Image loading="lazy" src={imgSrc}></Image>
      </AspectRatio.Root>
      <ProjectName>{name}</ProjectName>
      <ProjectStack>
        {techStack.map((item) => {
          return <ProjectStackItem key={item}>{item}</ProjectStackItem>;
        })}
      </ProjectStack>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectItemFooter>
        {githubLink && (
          <ProjectLink href={githubLink} target="_blank">
            <IoLogoGithub />
            <span>Github</span>
          </ProjectLink>
        )}
        {youtubeLink && (
          <ProjectLink href={youtubeLink}>
            <IoLogoYoutube />
            <span>Youtube</span>
          </ProjectLink>
        )}
      </ProjectItemFooter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --padding: 16px;
  padding: var(--padding);
  --inner-radius: 8px;
  border-radius: calc(var(--inner-radius) + var(--padding));
  background: var(--color-muted);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProjectItemFooter = styled.div`
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  border-radius: var(--inner-radius);
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ProjectName = styled.h3`
  font-size: 1.25rem;
  margin: var(--margin);
`;

const ProjectDescription = styled.p`
  flex: 1;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-decorative);
  padding: 8px;
  border-radius: var(--inner-radius);
  text-decoration: none;
  color: inherit;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const ProjectStack = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  gap: var(--padding);
  flex-wrap: wrap;
`;

const ProjectStackItem = styled.li`
  padding: 8px;
  background: var(--color-primary);
  border-radius: var(--inner-radius);
`;

export default ProjectItem;
