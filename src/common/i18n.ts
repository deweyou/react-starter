import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const initI18n = () => {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: ['en', 'zh', 'zh-CN', 'en-US'],
      debug: import.meta.env.DEV,
      backend: {
        // 自定义文案 JSON 文件的路径
        loadPath: '/locales/{{lng}}/{{ns}}.json', // 动态路径，{{lng}} 是语言，{{ns}} 是命名空间
      },
      detection: {
        // 检测顺序：先检查 localStorage，再检查浏览器语言
        order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        // 缓存用户选择的语言到 localStorage
        caches: ['localStorage'],
        // localStorage 中的键名（默认是 'i18nextLng'）
        lookupLocalStorage: 'i18nextLng',
      },
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    });
};
