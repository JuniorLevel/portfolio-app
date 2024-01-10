import Layout from 'components/layout/Layout';
import { FC } from 'react';
import styles from './About.module.scss';
import { about } from './about.ts';
const About: FC = () => {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>О себе</h1>
        <p>{about.text1}</p>
        <p>{about.text2}</p>
        <p>{about.text3}</p>
      </div>
    </Layout>
  );
};

export default About;
