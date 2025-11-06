import GlobalLoader from '@/components/one-bite/GlobalLoader';
import supabase from '@/lib/supabase';
import { useIsLoaded, useSetSession } from '@/store/authStore';
import { useEffect, type ReactNode } from 'react';

// 리액트 컴포넌트를 children으로 받는다.
export default function SessionProvider({ children }: { children: ReactNode }) {
  const setSession = useSetSession();
  const isLoaded = useIsLoaded();

  useEffect(() => {
    // onAuthStateChange: 세션 데이터가 변할 때마다 호출된다.
    supabase.auth.onAuthStateChange((event, session) => {
      //업데이트 된 세션 데이터를 세션 스토어에 보관하는 로직
      setSession(session); // 업데이트 된 세션 보관
    });
  }, []);

  if (!isLoaded) return <GlobalLoader />;

  return children;
}
