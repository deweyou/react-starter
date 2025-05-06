import classNames from 'classnames';
import styles from './index.module.less';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const LocaleButton = () => {
  const { i18n } = useTranslation();

  const toggleLocale = useCallback(() => {
    const lang = i18n.language;
    i18n.changeLanguage(lang === 'zh-CN' ? 'en-US' : 'zh-CN');
  }, [i18n]);

  return (
    <div className={styles.box}>
      <div className={classNames('i-iconoir:translate', styles.btn)} onClick={toggleLocale}></div>
    </div>
  );
};
