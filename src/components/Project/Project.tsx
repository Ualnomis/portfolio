import styled from 'styled-components';
import ProjectItem from '../ProjectItem';
import PageSection from '../PageSection';
import { PROJECTS, QUERIES } from '../../constants';

const Project = () => {
  return (
    <PageSection header="Project" id="project">
      <ProjectWrapper>
        {PROJECTS.map((project) => {
          return <ProjectItem key={project.name} {...project} />;
        })}
      </ProjectWrapper>
    </PageSection>
  );
};

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
  }
`;

export default Project;
