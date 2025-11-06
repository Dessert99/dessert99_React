import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUpdatePassword } from '@/hooks/queries/useAuth';
import { generateErrorMessage } from '@/lib/error';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { mutate: updatePasswrod, isPending } = useUpdatePassword({
    onSuccess: () => {
      toast.info('비밀번호가 성공적으로 변경되었습니다.', { position: 'top-center' });
      navigate('/onebite');
    },
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: 'top-center',
      });
      setPassword(''); // 중복 요청 방지
    },
  });

  const handleUpdatePassword = () => {
    if (password.trim() === '') return;
    updatePasswrod(password);
  };

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>비밀번호 재설정하기</div>
        <div className='text-muted-foreground'>새로운 비밀번호를 입력해주세요</div>
      </div>
      <Input
        className='py-6'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disabled={isPending}
        onClick={handleUpdatePassword}
        className='w-full'>
        비밀번호 변경하기
      </Button>
    </div>
  );
};

export default ResetPasswordPage;
