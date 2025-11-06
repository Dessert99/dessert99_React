import { requestPasswordResetEmail, signInWithOAuth, updatePassword } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { signInWithPassword } from '@/api/auth';
import { signUp } from '@/api/auth';
import type { UseMutationCallback } from '@/types/types';

export function useSignInWithOAuth(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithOAuth,
    onError: (error) => {
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}

export function useSignInWithPassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,

    //signInWithPassword에서 던져진 error객체는 여기로 온다.
    onError: (error) => {
      console.error(error); // (A) 먼저 여기가 실행된다.

      // (B) 컴포넌트에서 콜백을 넘겼는지 확인한다. (넘겼으므로 true)
      if (callbacks?.onError) {
        // (C) 컴포넌트가 넘겨준 함수를 호출하며 'error' 객체를 그대로 전달한다. (이제 SignInPage로 넘어간다.)
        callbacks.onError(error);
      }
    },
  });
}

export function useSignUp(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: signUp,
    onError: (error) => {
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}

//callbacks으로 콜백 함수를 외부 주입 받음으로서 화면/상황별로 추가 동작을 끼워넣을 수 있어 재사용성이 올라간다.
export function useRequestPasswordResetEmail(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: requestPasswordResetEmail,
    //외부에서 넘겨준 onSuccess 콜백만 호출
    onSuccess: () => {
      if (callbacks?.onSuccess) {
        callbacks.onSuccess();
      }
    },
    //에러 객체를 그대로 외부 콜백에 전달
    onError: (error) => {
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}

export function useUpdatePassword(callbacks?: UseMutationCallback) {
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      if (callbacks?.onSuccess) {
        callbacks.onSuccess();
      }
    },
    onError: (error) => {
      if (callbacks?.onError) {
        callbacks.onError(error);
      }
    },
  });
}
