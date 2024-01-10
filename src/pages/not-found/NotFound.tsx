import Layout from 'components/layout/Layout';
import { FC } from 'react';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <Layout>
      <div className={styles.notFound}>
        <p>Страница не найдена</p>
      </div>
    </Layout>
  );
};

export default NotFound;
