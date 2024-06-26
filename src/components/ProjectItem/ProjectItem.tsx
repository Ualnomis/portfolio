import styled from 'styled-components';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { ProjectItemProps } from '../../types';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const linkHoverAnimation = {
  scale: 1.05,
  opacity: 1,
};

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
        <Image loading="lazy" src={imgSrc} alt=""></Image>
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
          <ProjectLink
            href={githubLink}
            target="_blank"
            whileHover={linkHoverAnimation}
          >
            <Icon icon="line-md:github-loop" aria-hidden={true} />
            <span>Github</span>
          </ProjectLink>
        )}
        {youtubeLink && (
          <ProjectLink
            target="_blank"
            href={youtubeLink}
            whileHover={linkHoverAnimation}
          >
            <Icon icon="line-md:youtube-filled" aria-hidden={true} />
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

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-decorative);
  padding: 8px;
  border-radius: var(--inner-radius);
  text-decoration: none;
  color: inherit;
  opacity: 0.9;
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
  background: var(--color-info);
  border-radius: var(--inner-radius);
`;

export default ProjectItem;
