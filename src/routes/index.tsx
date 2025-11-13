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
import NoLoginLayout from '@/layouts/NoLoginLayout';
import YesLoginLayout from '@/layouts/YesLoginLayout';
import ModalProvider from '@/provider/ModalProvider';
import Home from '@/pages/likelion-project/Home';
import LikeLionLayout from '@/layouts/LikeLionLayout';
import Study from '@/pages/likelion-project/Study';
import Collection from '@/pages/likelion-project/Collection';
import StudyRoom from '@/pages/likelion-project/StudyRoom';
import CreateStudy from '@/pages/likelion-project/CreateStudy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { index: true, element: <DefaultHome /> },
      { path: 'shadcn', element: <ShadcnPage /> },
      { path: 'tailwind', element: <AnimationPage /> },
    ],
  },
  {
    path: 'mycompany',
    element: <MyCompanyWebsiteLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'board', element: <BoardPage /> },
      { path: 'leadership', element: <LeadershipPage /> },
      { path: 'service', element: <ServicePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'projects', element: <ProjectPage /> },
    ],
  },

  {
    path: 'onebite',
    element: <OneBiteLayout />,
    children: [
      {
        element: <NoLoginLayout />, // 라우트 가드
        children: [
          { path: 'sign-in', element: <SignInPage /> },
          { path: 'sign-up', element: <SignUpPage /> },
          { path: 'forget-password', element: <PasswordForgetPage /> },
        ],
      },
      {
        element: <YesLoginLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'todos', element: <ExampleComponent /> },
          { path: 'post/:postId', element: <PostDetailPage /> },
          { path: 'profile/:userId', element: <ProfileDetailPage /> },
          { path: 'reset-password', element: <ResetPasswordPage /> },
          { path: 'shadcn', element: <ShadcnPage /> },
          { path: 'animation', element: <AnimationPage /> },
        ],
      },
    ],
  },
  {
    path: 'likelion',
    element: <LikeLionLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'study', element: <Study /> },
      { path: 'study/:id', element: <StudyRoom /> },
      { path: 'collection', element: <Collection /> },
      { path: 'create-study', element: <CreateStudy /> },
    ],
  },

  { path: '*', element: <Navigate to={'/'} /> }, // 이상한 경로로 들어가면 홈으로 이동
]);

function Router() {
  return (
    //세션을 관리하는 모든 로직을 SessionProvider컴포넌트로 분리할 수 있다.
    <SessionProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </SessionProvider>
  );
}

export default Router;
