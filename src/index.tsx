import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '##/contexts';
import { RouterProvider } from 'react-router';
import { router } from '##/routes';
import { initFonts, initI18n } from '##/common';

import '##/styles/reset.less';
import '##/styles/variables.less';
import '##/styles/global.less';
import 'virtual:uno.css';

initFonts();
initI18n();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
