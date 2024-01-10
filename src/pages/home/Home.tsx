import Layout from 'components/layout/Layout';
import Contacts from 'components/ui/contacts/Contacts';
import { FC } from 'react';
import styles from './Home.module.scss';
const Home: FC = () => {
  return (
    <Layout>
      <div>
        <div className={styles.home}>
          <div className={styles.homeImage}>
            <img src="/images/profile.png" alt="profile-img" />
          </div>
          <h1>
            Привет, меня зовут <span>Дмитрий</span>
          </h1>
        </div>
        <div className={styles.homeBlockInfo}>
          <p className={styles.homeText}>Я Junior Frontend разработчик</p>
          <Contacts />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
