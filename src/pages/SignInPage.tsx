import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignInWithPassword } from '@/hooks/mutations/useSignInWithPassword';
import githubLogo from '@/assets/github.png';
import { useState } from 'react';
import { Link } from 'react-router';
import { useSignInWithOAuth } from '@/hooks/mutations/useSignInWithOAuth';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signInWithPassword } = useSignInWithPassword();
  const { mutate: signInWithOAuth } = useSignInWithOAuth();

  const handleSubmit = () => {
    if (email.trim() === '' || password.trim() === '') return;
    signInWithPassword({ email, password });
  };

  const handleSignInWithGithub = () => {
    signInWithOAuth('github');
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='text-2xl font-bold'>로그인 페이지</div>
      <div className='flex flex-col gap-3'>
        <Input
          className='py-6'
          type='email'
          placeholder='이메일을 입력해주세요.'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className='py-6'
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-3'>
        <Button
          className='w-full'
          onClick={handleSubmit}>
          로그인
        </Button>
        <Button
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
          to={'/sign-up'}
          className='text-muted-foreground hover:underline'>
          {/* muted-foreground: 배경(background)과 대비되지만 덜 눈에 띄는 색 */}첫 방문이라면?
          회원가입 가기
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
