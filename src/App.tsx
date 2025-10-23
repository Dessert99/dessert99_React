import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectPage from '@/pages/ProjectPage';
import MainPage from '@/pages/MainPage';
import AboutPage from '@/pages/AboutPage';
import BoardPage from '@/pages/BoardPage';
import LeadershipPage from '@/pages/LeadershipPage';
import ServicePage from '@/pages/ServicePage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from './components/ui/sonner';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/*자식 요소를 가리킨다. 이렇게 하면 Outlet만 렌더링 된다?  */}
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, //루트 경로와 동일
        element: <MainPage />,
      },
      { path: '/about', element: <AboutPage /> },
      { path: '/board', element: <BoardPage /> },
      { path: '/leadership', element: <LeadershipPage /> },
      { path: '/service', element: <ServicePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/projects', element: <ProjectPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
