import { useSession } from '@/store/authStore';

import { Navigate, Outlet } from 'react-router';

// 라우트 가드
export default function NoLoginLayout() {
  const session = useSession(); // 현재 세션 상태 가져오기

  if (session) return <Navigate to={'/onebite'} />; // 로그인 된 상태라면 홈으로 리디렉션

  return <Outlet />;
}
