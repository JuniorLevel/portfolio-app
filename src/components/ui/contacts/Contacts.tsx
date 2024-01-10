import { FC } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import styles from './Contacts.module.scss';
const Contacts: FC = () => {
  return (
    <ul className={styles.contacts}>
      <li>
        <a href="mailto:work.junior@mail.ru?subject=Предложение о работе">
          <MdAlternateEmail className={styles.icon} />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/JuniorLevel?tab=repositories"
          target="_blank"
        >
          <FaGithub className={styles.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
