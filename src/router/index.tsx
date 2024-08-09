import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from '../components/Layouts';
import Login from '../pages/Login';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: routes.map((route) => ({
      path: route.path,
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <route.element />
        </Suspense>
      ),
    })),
  },
]);

export default router;
