import supabase from '@/lib/supabase';

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
