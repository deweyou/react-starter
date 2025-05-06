import { LocaleButton, ThemeButton } from '##/components';
import { useTranslation } from 'react-i18next';
import styles from './index.module.less';
import { useDocumentTitle } from '@uidotdev/usehooks';

export const Home = () => {
  const { t } = useTranslation();

  useDocumentTitle('Home');

  return (
    <div className={styles.home}>
      <ThemeButton />
      <div className={styles.text}>{t('title')}</div>
      <LocaleButton />
    </div>
  );
};
