import { IconType } from 'react-icons';

export interface SkillItemProps {
  icon: IconType;
  text: string;
}

export interface ProjectItemProps {
  name: string;
  techStack: string[];
  githubLink?: string;
  youtubeLink?: string;
  imgSrc: string;
  description: string;
}
