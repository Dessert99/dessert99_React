import { fetchProfile } from '@/api/profile';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export function useProfileData(userId?: string) {
  return useQuery({
    queryKey: QUERY_KEYS.profile.byId(userId!), // userId는 절대 null이나 undefined가 아니라고 TypeScript에게 단언하는(!) 구문이다.
    queryFn: () => fetchProfile(userId!),
    enabled: !!userId, // 유저 아이디가 없으면 아무 일도 일어나지 않는다. !! 연산자는 어떤 값이든 명시적인 true 또는 false 값으로 변환하는 역할
  });
}

/*
⭐️ userId가 null, undefined라고 단언할 수 있는 이유는, enabled: !!userId옵션으로 유저 아이디가 없으면 쿼리 함수 자체를 실행하지 않도록 설정했기 때문이다.
*/
