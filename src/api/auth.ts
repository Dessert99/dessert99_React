import supabase from '@/lib/supabase';

interface SignUpTpye {
  email: string;
  password: string;
}

export const signUp = async (body: SignUpTpye) => {
  const { data, error } = await supabase.auth.signUp(body);
  if (error) throw error;
  return data; //회원가입 결과 (user,sesstion 정보 반환)
};
