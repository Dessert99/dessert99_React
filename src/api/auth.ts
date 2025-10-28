import supabase from '@/lib/supabase';

interface WithPasswordType {
  email: string;
  password: string;
}

export const signUp = async (body: WithPasswordType) => {
  const { data, error } = await supabase.auth.signUp(body);
  if (error) throw error;
  return data; //회원가입 결과 (user,sesstion 정보 반환)
};

export const signInWithPassword = async (body: WithPasswordType) => {
  const { data, error } = await supabase.auth.signInWithPassword(body);
  if (error) throw error;
  return data;
};
