import GlobalLoader from '@/components/one-bite/GlobalLoader';
import { useProfileData } from '@/hooks/queries/useProfile';
import supabase from '@/lib/supabase';
import { useIsLoaded, useSession, useSetSession } from '@/store/authStore';
import { useEffect, type ReactNode } from 'react';

// 리액트 컴포넌트를 children으로 받는다.
export default function SessionProvider({ children }: { children: ReactNode }) {
  const session = useSession();
  const setSession = useSetSession();
  const isLoaded = useIsLoaded();

  // isLoading은 queryfn이 실행 중일 때에만 true가 된다. ⭐️ isPending으로 하면 계속 로딩 중
  const {
    data: profile,
    isLoading: isProfileLoading,
    isPending,
  } = useProfileData(session?.user.id); // 사용자가 로그인 했을 때 프로필 정보가 있다면 useProfileData가 실행될 것.

  useEffect(() => {
    // onAuthStateChange: 세션 데이터가 변할 때마다 호출된다.
    supabase.auth.onAuthStateChange((event, session) => {
      //업데이트 된 세션 데이터를 세션 스토어에 보관하는 로직
      setSession(session); // 업데이트 된 세션 보관
    });
  }, []);

  if (!isLoaded) return <GlobalLoader />;
  if (isProfileLoading) return <GlobalLoader />; // 프로필 정보 가져올 때는 로딩 화면

  return children;
}
