import Layout from 'components/layout/Layout';
import 'interfaces/interfaces.ts';
import { FC } from 'react';
import styles from './Stack.module.scss';
import { stack } from './stack.ts';
const Stack: FC = () => {
  return (
    <Layout>
      <div className={styles.stack}>
        <h1>Стек технологий</h1>
        <ul>
          {stack.map(item => (
            <li key={item.id}>{item.data}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Stack;
