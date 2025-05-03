import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Layout, ThemeButton } from '##/components';
import { ThemeProvider } from '##/contexts';
import '##/styles/reset.less';
import '##/styles/variables.less';
import 'virtual:uno.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Layout>
        <ThemeButton />
        HelloWorld.
      </Layout>
    </ThemeProvider>
  </StrictMode>
);
