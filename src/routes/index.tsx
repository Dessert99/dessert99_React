import DefaultLayout from '@/layouts/DefaultLayout';
import AboutPage from '@/pages/AboutPage';
import BoardPage from '@/pages/BoardPage';
import ContactPage from '@/pages/ContactPage';
import ExampleComponent from '@/example/ExampleQuery';
import LeadershipPage from '@/pages/LeadershipPage';
import MainPage from '@/pages/MainPage';
import ProjectPage from '@/pages/ProjectPage';
import ServicePage from '@/pages/ServicePage';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'board', element: <BoardPage /> },
      { path: 'leadership', element: <LeadershipPage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'projects', element: <ProjectPage /> },
    ],
  },
  { path: 'todos', element: <ExampleComponent /> },
  {},
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
