import { FC } from 'react';
import { GoProjectSymlink } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';
import { SiAboutdotme, SiSkillshare } from 'react-icons/si';
import { Link } from 'react-router-dom';
import styles from './NavigationSideBar.module.scss';
const NavigationSideBar: FC = () => {
  return (
    <aside className={styles.navigationSidebar}>
      <nav>
        <ul>
          <li className="flex items-center gap-1">
            <Link to="/">
              <IoHomeOutline className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <SiAboutdotme className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link to="/stack">
              <SiSkillshare className={styles.icon} />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <GoProjectSymlink className={styles.icon} />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavigationSideBar;
