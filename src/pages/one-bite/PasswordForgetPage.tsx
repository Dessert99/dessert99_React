import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRequestPasswordResetEmail } from '@/hooks/queries/useAuth';
import { generateErrorMessage } from '@/lib/error';
import { useState } from 'react';
import { toast } from 'sonner';

const PasswordForgetPage = () => {
  const [email, setEmail] = useState('');

  // 구조 분해 할당으로 받으면 isPending 같은 옵션을 꺼내기 수월하다.
  const { mutate: requestPasswordResetEmail, isPending } = useRequestPasswordResetEmail({
    onSuccess: () => {
      toast.info('인증 메일이 잘 발송 되었습니다.', { position: 'top-center' });
      setEmail(''); // 이메일 중복 요청 방지
    },
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, { position: 'top-center' });
      setEmail('');
    },
  });

  // 비밀번호 재설정 인증 메일 핸들러
  const handleSendEmail = () => {
    if (email.trim() === '') return; // 유효성 검사
    requestPasswordResetEmail(email); // 이메일 인증 번호 전송
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>비밀번호를 잊으셨나요?</div>
        <div className='text-muted-foreground'>
          이메일로 비밀번호를 재설정할 수 있는 인증 링크를 보내드립니다.
        </div>
      </div>
      <Input
        className='py-6'
        placeholder='example@abc.com'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        disabled={isPending}
        onClick={handleSendEmail}
        className='w-full'>
        인증 메일 요청하기
      </Button>
    </div>
  );
};

export default PasswordForgetPage;
