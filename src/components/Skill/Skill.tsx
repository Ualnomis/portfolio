import * as React from 'react';
import styled from 'styled-components';
import SkillItem from '../SkillItem';
import PageSection from '../PageSection';
import { motion, LayoutGroup, useInView, animate } from 'framer-motion';
import { SKILLS } from '../../constants';
import { SkillItemProps } from '../../types';

// Consolidate skill data and state into a single object
const Skill = () => {
  const [skillCategories, setSkillCategories] = React.useState<{
    all: SkillItemProps[];
    frontend: SkillItemProps[];
    backend: SkillItemProps[];
    lang: SkillItemProps[];
  }>({
    all: SKILLS,
    frontend: [],
    backend: [],
    lang: [],
  });
  const unsortedSkillWrapperRef = React.useRef(null);
  const isUnsortedSkillWrapperRefInView = useInView(unsortedSkillWrapperRef, {
    once: true,
  });
  const frontendWrapperRef = React.useRef(null);
  const backendWrapperRef = React.useRef(null);
  const langWrapperRef = React.useRef(null);

  React.useEffect(() => {
    if (!isUnsortedSkillWrapperRefInView) return;

    const animateAndSetSkills = () => {
      animate(
        frontendWrapperRef.current,
        { opacity: 1 },
        { ease: 'easeInOut', duration: 0.5 },
      );
      animate(
        backendWrapperRef.current,
        { opacity: 1 },
        { ease: 'easeInOut', duration: 0.5 },
      );
      animate(
        langWrapperRef.current,
        { opacity: 1 },
        { ease: 'easeInOut', duration: 0.5 },
      );

      setSkillCategories({
        all: [],
        frontend: SKILLS.filter((skill) => {
          return skill.type === 'frontend';
        }),
        backend: SKILLS.filter((skill) => {
          return skill.type === 'backend';
        }),
        lang: SKILLS.filter((skill) => {
          return skill.type === 'lang';
        }),
      });
    };

    const animationTimer = setTimeout(animateAndSetSkills, 0.3);

    return () => {
      clearTimeout(animationTimer);
    };
  }, [isUnsortedSkillWrapperRefInView]);

  return (
    <LayoutGroup>
      <Wrapper>
        <PageSection header="Skill" id="skill">
          <UnsortedSkillWrapper ref={unsortedSkillWrapperRef}>
            {skillCategories.all.map((skill) => {
              return (
                <SkillItem
                  layout="position"
                  layoutId={skill.text}
                  key={skill.text}
                  icon={skill.icon}
                  text={skill.text}
                />
              );
            })}
          </UnsortedSkillWrapper>
          <SortedSkillWrapper>
            <SkillTypeWrapper ref={frontendWrapperRef} initial={{ opacity: 0 }}>
              {!!skillCategories.frontend.length && (
                <SkillTypeTitle>Front-end</SkillTypeTitle>
              )}
              {skillCategories.frontend.map((skill) => {
                return (
                  <SkillItem
                    layout="position"
                    layoutId={skill.text}
                    key={skill.text}
                    icon={skill.icon}
                    text={skill.text}
                  />
                );
              })}
            </SkillTypeWrapper>
            <SkillTypeWrapper ref={backendWrapperRef} initial={{ opacity: 0 }}>
              {!!skillCategories.backend.length && (
                <SkillTypeTitle>Back-end</SkillTypeTitle>
              )}
              {skillCategories.backend.map((skill) => {
                return (
                  <SkillItem
                    layout="position"
                    layoutId={skill.text}
                    key={skill.text}
                    icon={skill.icon}
                    text={skill.text}
                  />
                );
              })}
            </SkillTypeWrapper>
            <SkillTypeWrapper ref={langWrapperRef} initial={{ opacity: 0 }}>
              {!!skillCategories.lang.length && (
                <SkillTypeTitle>Programming Languages</SkillTypeTitle>
              )}
              {skillCategories.lang.map((skill) => {
                return (
                  <SkillItem
                    layout="position"
                    layoutId={skill.text}
                    key={skill.text}
                    icon={skill.icon}
                    text={skill.text}
                  />
                );
              })}
            </SkillTypeWrapper>
          </SortedSkillWrapper>
        </PageSection>
      </Wrapper>
    </LayoutGroup>
  );
};

const SkillTypeTitle = styled.h3`
  grid-column: 1 / -1;
  text-align: center;
`;

const SortedSkillWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const SkillTypeWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  justify-items: center;
  align-items: center;
  grid-template-rows: 48px;
  padding: 16px;
  border-radius: 16px;
  background: var(--color-muted);
  gap: 16px;
`;

const UnsortedSkillWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  justify-items: center;
  align-items: center;
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default Skill;
