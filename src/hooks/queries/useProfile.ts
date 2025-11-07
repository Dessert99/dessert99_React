import { createProfile, fetchProfile } from '@/api/profile';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useSession } from '@/store/authStore';
import type { PostgrestError } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';

export function useProfileData(userId?: string) {
  const session = useSession();

  const isMine = session?.user.id === userId; // 내 프로필이 없을 때만 프로필을 생성하기 위해 추가

  return useQuery({
    queryKey: QUERY_KEYS.profile.byId(userId!), // userId는 절대 null이나 undefined가 아니라고 TypeScript에게 단언하는(!) 구문이다.
    queryFn: async () => {
      try {
        // 프로필이 존재한다면 불러온다.
        const profile = await fetchProfile(userId!);
        return profile;
      } catch (error) {
        // 프로필 정보가 없다면, PostgrestError타입의 "PGRST116" 에러가 발생한다. 이때 새로운 프로필을 자동으로 생성해준다.
        if (isMine && (error as PostgrestError).code === 'PGRST116') {
          return await createProfile(userId!);
        }
        throw error; // 다른 에러라면 던지기
      }
    },
    enabled: !!userId, // 유저 아이디가 없으면 아무 일도 일어나지 않는다. !! 연산자는 어떤 값이든 명시적인 true 또는 false 값으로 변환하는 역할
  });
}

/*
⭐️ userId가 null, undefined라고 단언할 수 있는 이유는, enabled: !!userId옵션으로 유저 아이디가 없으면 쿼리 함수 자체를 실행하지 않도록 설정했기 때문이다.
*/
