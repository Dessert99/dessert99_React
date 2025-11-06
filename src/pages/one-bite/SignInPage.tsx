import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import githubLogo from '@/assets/github.png';
import { useState } from 'react';
import { Link } from 'react-router';
import { useSignInWithOAuth, useSignInWithPassword } from '@/hooks/queries/useAuth';
import { toast } from 'sonner';
import { generateErrorMessage } from '@/lib/error';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signInWithPassword, isPending: PendingWithPassword } = useSignInWithPassword({
    onError: (error) => {
      // (D) 비밀번호 입력창을 비운다.
      setPassword(''); // 에러 발생하면 비밀번호 초기화

      // (E) 사용자에게 토스트 알림을 띄운다.
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: 'top-center',
      });
    },
  });
  const { mutate: signInWithOAuth, isPending: PendingWithOAuth } = useSignInWithOAuth({
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: 'top-center',
      });
    },
  });

  const handleSubmit = () => {
    if (email.trim() === '' || password.trim() === '') return;
    signInWithPassword({ email, password });
  };

  const handleSignInWithGithub = () => {
    signInWithOAuth('github');
  };

  const isPending = PendingWithPassword || PendingWithOAuth;

  return (
    <div className='flex flex-col gap-8'>
      <div className='text-2xl font-bold'>로그인 페이지</div>
      <div className='flex flex-col gap-3'>
        <Input
          disabled={isPending}
          className='py-6'
          type='email'
          placeholder='이메일을 입력해주세요.'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          disabled={isPending}
          className='py-6'
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Button
          disabled={isPending}
          className='w-full'
          onClick={handleSubmit}>
          로그인
        </Button>
        <Button
          disabled={isPending}
          onClick={handleSignInWithGithub}
          className='w-full'
          variant={'outline'}>
          <img
            src={githubLogo}
            className='h-4 w-4'
          />
          깃허브 계정으로 로그인
        </Button>
      </div>
      <div>
        <Link
          to={'/onebite/sign-up'}
          className='text-muted-foreground hover:underline'>
          {/* muted-foreground: 배경(background)과 대비되지만 덜 눈에 띄는 색 */}첫 방문이라면?
          회원가입 가기
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
