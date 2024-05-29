import { IconType } from 'react-icons';

export interface SkillItemProps {
  icon: IconType;
  text: string;
  type: 'frontend' | 'backend' | 'lang';
  layout?: boolean | 'size' | 'position' | 'preserve-aspect';
  layoutId?: string;
}

export interface ProjectItemProps {
  name: string;
  techStack: string[];
  githubLink?: string;
  youtubeLink?: string;
  imgSrc: string;
  description: string;
}

export interface SentResultProps {
  readonly $isSuccess: boolean;
}

export interface SmoothScrollToProps {
  id: string;
  callback?: () => void;
  children: React.ReactNode;
}

export interface CustomEyeBallCSSProperties extends React.CSSProperties {
  '--eye-translate3d'?: string;
}

export interface EyeBallProps {
  ref: React.RefObject<HTMLDivElement>;
  style: CustomEyeBallCSSProperties;
}
