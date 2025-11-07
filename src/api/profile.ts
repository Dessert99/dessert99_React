import supabase from '@/lib/supabase';
import { getRandomNickname } from '@/utils/randomNickname';

// 회원가입 이후 기존 프로필 정보가 있는지 조회하는 api
export const fetchProfile = async (userId: string) => {
  // from뒤에 어떤 테이블에서 데이터를 불러올 것인지 명시 필요
  const { data, error } = await supabase
    .from('profile')
    .select('*') //  어떤 칼럼 데이터를 가져올 것인가 (*는 모든 데이터)
    .eq('id', userId) // id = userId인 데이터만 불러오기
    .single(); // 조건에 부합하는 단 하나의 데이터만 불러오기

  if (error) throw error;
  return data;
};

// 프로필 조회 요청에서 데이터가 없다는 오류가 발생했을 때 호출하는 APi
export const createProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profile')
    // 'profile' 테이블에 새로운 데이터를 삽입(insert)합니다.
    .insert({
      id: userId,
      nickname: getRandomNickname(),
      bio: '',
    })
    .select() // 데이터를 삽입한 후, 방금 삽입된 그 행(row)의 데이터를 반환받기 위해 select()를 호출합니다
    // insert().select()는 기본적으로 배열을 반환하지만,
    // .single()을 추가하여 방금 삽입된 단 하나의 객체(data)만 반환하도록 합니다.
    .single();

  if (error) throw error;
  return data;
};
