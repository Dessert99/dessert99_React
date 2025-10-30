import DefaultLayout from '@/layouts/DefaultLayout';
import OneBiteLayout from '@/layouts/OneBiteLayout';
import AboutPage from '@/pages/AboutPage';
import BoardPage from '@/pages/BoardPage';
import ContactPage from '@/pages/ContactPage';
import ExampleComponent from '@/example/ExampleQuery';
import LeadershipPage from '@/pages/LeadershipPage';
import MainPage from '@/pages/MainPage';
import ProjectPage from '@/pages/ProjectPage';
import ServicePage from '@/pages/ServicePage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import HomePage from '@/pages/HomePage';
import PasswordForgetPage from '@/pages/PasswordForgetPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import PostDetailPage from '@/pages/PostDetailPage';
import ProfileDetailPage from '@/pages/ProfileDetailPage';
import ShadcnPage from '@/pages/ShadcnPage';

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

  {
    element: <OneBiteLayout />,
    children: [
      { path: 'todos', element: <ExampleComponent /> },
      { path: 'home', element: <HomePage /> },
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
      { path: 'forget-password', element: <PasswordForgetPage /> },
      { path: 'post/:postId', element: <PostDetailPage /> },
      { path: 'profile/:userId', element: <ProfileDetailPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
      { path: 'shadcn', element: <ShadcnPage /> },
    ],
  },

  { path: '*', element: <Navigate to={'/'} /> }, // 이상한 경로로 들어가면 홈으로 이동
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
