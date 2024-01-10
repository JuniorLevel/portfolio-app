import NavigationSideBar from 'components/navigation-sidebar/NavigationSideBar';
import { FC, ReactElement } from 'react';
import styles from './Layout.module.scss';
interface ILayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <NavigationSideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
