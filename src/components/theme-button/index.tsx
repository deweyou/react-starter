import { useTheme } from '##/contexts';
import styles from './index.module.less';
import classnames from 'classnames';

export const ThemeButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className={styles.btn_group}>
      <div className={classnames('i-iconoir:sun-light', styles.btn)} onClick={() => toggleTheme('light')} />
      <div className={classnames('i-iconoir:half-moon', styles.btn)} onClick={() => toggleTheme('dark')} />
    </div>
  );
};
