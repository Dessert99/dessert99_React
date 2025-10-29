import { signInWithOAuth } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { signInWithPassword } from '@/api/auth';
import { signUp } from '@/api/auth';
import { toast } from 'sonner';

export function useSignInWithOAuth() {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
}

export function useSignInWithPassword() {
  return useMutation({
    mutationFn: signInWithPassword,

    //signInWithPassword에서 던져진 error객체는 여기로 온다.
    onError: (error) => {
      console.error(error);
      toast.error(error.message, {
        position: 'top-center',
      });
    },
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: signUp,
  });
}
