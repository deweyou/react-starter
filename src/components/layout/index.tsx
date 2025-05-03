import { ReactNode } from 'react';
import styles from './index.module.less';

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className={styles.layout}>{children}</div>;
};
