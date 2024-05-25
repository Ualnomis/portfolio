import * as React from 'react';
import styled from 'styled-components';
import PageSection from '../PageSection';

const About = () => {
  return (
    <PageSection header="About">
      <Paragraph>
        Hello! I&apos;m Simon Lau, a passionate web developer with a deep
        interest in everything from database design to crafting exceptional user
        experiences. My expertise lies in creating seamless and interactive web
        experiences that are both functional and aesthetically pleasing.
      </Paragraph>
      <Paragraph>
        My journey into web development began six years ago, fueled by a
        fascination with how technology shapes our daily interactions. Over the
        years, I&apos;ve honed my skills in HTML, CSS, JavaScript, and, most
        notably, React. My experience across various industries, from startups
        to established enterprises, has enabled me to adapt and thrive in
        different work environments.As I&apos;ve grown as a developer, I&apos;ve
        worked alongside senior designers and developers who have raised my
        standards for what’s expected of any web application.
      </Paragraph>
      <Paragraph>
        With a knack for turning ideas into engaging digital experiences, I
        bring a unique perspective to every project I undertake. Let&apos;s
        create something amazing together!
      </Paragraph>
    </PageSection>
  );
};

const Paragraph = styled.p`
  padding: 16px 0;
  font-size: 1.25rem;
`;

export default About;
