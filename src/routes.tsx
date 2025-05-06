import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { Home } = await import('##/views/home');
      return {
        element: <Home />,
      };
    },
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('##/views/not-found');
      return {
        element: <NotFound />,
      };
    },
  },
]);
