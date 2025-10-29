import { signInWithOAuth } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { signInWithPassword } from '@/api/auth';
import { signUp } from '@/api/auth';

export function useSignInWithOAuth() {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
}

export function useSignInWithPassword() {
  return useMutation({
    mutationFn: signInWithPassword,
  });
}

export function useSignUp() {
  return useMutation({
    mutationFn: signUp,
  });
}
