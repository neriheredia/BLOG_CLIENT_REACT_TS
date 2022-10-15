import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, NotFound, Register, Single, Write } from '@/pages';
import { ApplicationContainer } from '@/styled-components';
import { Layout } from '@/components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

export function App() {
  return (
    <ApplicationContainer>
      <RouterProvider router={router} />
    </ApplicationContainer>
  );
}
