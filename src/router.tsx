import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import { ComingSoon, NowPlaying, Popular, Detail } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'popular',
        element: <Popular />,
        children: [
          {
            path: ':id',
            element: <Detail />,
          },
        ],
      },
      {
        path: 'now-playing',
        element: <NowPlaying />,
        children: [
          {
            path: ':id',
            element: <Detail />,
          },
        ],
      },
      {
        path: 'coming-soon',
        element: <ComingSoon />,
        children: [
          {
            path: ':id',
            element: <Detail />,
          },
        ],
      },
    ],
  },
]);

export default router;
