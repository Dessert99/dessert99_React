import { useSession } from '@/store/authStore';
import { Navigate, Outlet } from 'react-router';

export default function YesLoginLayout() {
  const session = useSession();

  if (!session)
    return (
      <Navigate
        to={'/onebite/sign-in'}
        replace={true} // 뒤로가기 방지
      />
    );
  return <Outlet />;
}
