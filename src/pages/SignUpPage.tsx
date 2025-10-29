import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignUp } from '@/hooks/queries/useAuth';
import { useState } from 'react';
import { Link } from 'react-router';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signUp } = useSignUp();

  const handleSubmit = async () => {
    if (email.trim() === '' || password.trim() === '') return;
    signUp({ email, password });
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='text-2xl font-bold'>회원가입 페이지</div>
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
      <div>
        <Button
          className='w-full'
          onClick={handleSubmit}>
          회원가입
        </Button>
      </div>
      <div>
        <Link
          to={'/sign-in'}
          className='text-muted-foreground hover:underline'>
          {/* muted-foreground: 배경(background)과 대비되지만 덜 눈에 띄는 색 */}
          이미 아이디가 있다면? 로그인으로 가기
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
