import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import SessionProvider from '@/provider/SessionProvider';
//mycompany
import MyCompanyWebsiteLayout from '@/layouts/MyCompanyLayout';
import MainPage from '@/pages/my-company/MainPage';
import AboutPage from '@/pages/my-company/AboutPage';
import BoardPage from '@/pages/my-company/BoardPage';
import ContactPage from '@/pages/my-company/ContactPage';
import LeadershipPage from '@/pages/my-company/LeadershipPage';
import ProjectPage from '@/pages/my-company/ProjectPage';
import ServicePage from '@/pages/my-company/ServicePage';
//onebite
import OneBiteLayout from '@/layouts/OneBiteLayout';
import HomePage from '@/pages/one-bite/HomePage';
import PasswordForgetPage from '@/pages/one-bite/PasswordForgetPage';
import ResetPasswordPage from '@/pages/one-bite/ResetPasswordPage';
import SignInPage from '@/pages/one-bite/SignInPage';
import SignUpPage from '@/pages/one-bite/SignUpPage';
import PostDetailPage from '@/pages/one-bite/PostDetailPage';
import ProfileDetailPage from '@/pages/one-bite/ProfileDetailPage';
import ExampleComponent from '@/example/ExampleQuery';
//default
import DefaultLayout from '@/layouts/DefaultLayout';
import DefaultHome from '@/pages/default/DefaultHome';
import ShadcnPage from '@/pages/default/ShadcnPage';
import AnimationPage from '@/pages/default/AnimationPage';

const router = createBrowserRouter([
  { element: <DefaultLayout />, children: [{ path: '/', element: <DefaultHome /> }] },
  {
    element: <MyCompanyWebsiteLayout />,
    children: [
      { path: 'mycompany/', element: <MainPage /> },
      { path: 'mycompany/about', element: <AboutPage /> },
      { path: 'mycompany/board', element: <BoardPage /> },
      { path: 'mycompany/leadership', element: <LeadershipPage /> },
      { path: 'mycompany/service', element: <ServicePage /> },
      { path: 'mycompany/contact', element: <ContactPage /> },
      { path: 'mycompany/projects', element: <ProjectPage /> },
    ],
  },
  {
    element: <OneBiteLayout />,
    children: [
      { path: 'onebite/', element: <HomePage /> },
      { path: 'onebite/todos', element: <ExampleComponent /> },
      { path: 'onebite/sign-in', element: <SignInPage /> },
      { path: 'onebite/sign-up', element: <SignUpPage /> },
      { path: 'onebite/forget-password', element: <PasswordForgetPage /> },
      { path: 'onebite/post/:postId', element: <PostDetailPage /> },
      { path: 'onebite/profile/:userId', element: <ProfileDetailPage /> },
      { path: 'onebite/reset-password', element: <ResetPasswordPage /> },
      { path: 'onebite/shadcn', element: <ShadcnPage /> },
      { path: 'onebite/animation', element: <AnimationPage /> },
    ],
  },

  { path: '*', element: <Navigate to={'/'} /> }, // 이상한 경로로 들어가면 홈으로 이동
]);

function Router() {
  return (
    //세션을 관리하는 모든 로직을 SessionProvider컴포넌트로 분리할 수 있다.
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  );
}

export default Router;
