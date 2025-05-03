import { StorageKey } from '##/constants';
import { Theme } from '##/types';
import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext, ReactNode, useCallback, useContext, useEffect } from 'react';
import { noop } from 'lodash-es';

interface ThemeContextType {
  theme: Theme;
  isSystemTheme: boolean;
  toggleTheme: (theme?: Theme | 'useSystem') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [{ theme, isSystemTheme }, setTheme] = useLocalStorage<{ theme: Theme; isSystemTheme: boolean }>(StorageKey.THEME, {
    theme: getSystemTheme(),
    isSystemTheme: true,
  });

  useEffect(() => {
    if (!isSystemTheme) {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setTheme({
        theme: e.matches ? 'dark' : 'light',
        isSystemTheme: true,
      });
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [isSystemTheme, setTheme]);

  const toggleTheme = useCallback<ThemeContextType['toggleTheme']>(
    newTheme => {
      if (newTheme === theme) {
        return;
      }

      if (newTheme === 'useSystem') {
        setTheme({
          theme: getSystemTheme(),
          isSystemTheme: true,
        });
        return;
      }

      setTheme({
        isSystemTheme: false,
        theme: newTheme ? newTheme : theme === 'light' ? 'dark' : 'light',
      });
    },
    [setTheme, theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, isSystemTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  return {
    theme: context?.theme ?? getSystemTheme(),
    toggleTheme: context?.toggleTheme ?? noop,
    isSystemTheme: context?.isSystemTheme ?? true,
  };
};
