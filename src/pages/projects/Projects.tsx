import Layout from 'components/layout/Layout';
import ProjectsSlider from 'components/projects-slider/ProjectsSlider';
import { FC } from 'react';
import styles from './Projects.module.scss';
const Projects: FC = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <h1>Мои проекты</h1>
        <ProjectsSlider />
      </div>
    </Layout>
  );
};

export default Projects;
