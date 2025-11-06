import supabase from '@/lib/supabase';
import type { Provider } from '@supabase/supabase-js';

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

//소셜 로그인 api
export const signInWithOAuth = async (provider: Provider) => {
  // provider라는 인증을 제공할 웹 서비스의 이름을 전달해야 한다. Provider타입은 다양한 외부 서비스들이 유니온으로 묶여있다.
  const { error, data } = await supabase.auth.signInWithOAuth({ provider });
  if (error) throw error;

  return data;
};

// 비밀번호 재설정하기 위해 인증 메일을 보내기 위한 로직
export const requestPasswordResetEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${import.meta.env.VITE_PUBLIC_URL}/onebite/reset-password`, // 이메일 인증이 끝난 뒤, 리디렉션 페이지를 설정해야 한다. 여기서 비밀번호를 재설정한다.
  });
  if (error) throw error;
  return data;
};

// 유저 정보 변경 요청
export const updatePassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password: password, // 변경될 유저 정보를 넣을 수 있다.
  });
  if (error) throw error;
  return data;
};
