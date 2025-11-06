import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ResetPasswordPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-bold'>비밀번호 재설정하기</div>
        <div className='text-muted-foreground'>새로운 비밀번호를 입력해주세요</div>
      </div>
      <Input
        className='py-6'
        placeholder='password'
      />
      <Button className='w-full'>비밀번호 변경하기</Button>
    </div>
  );
};

export default ResetPasswordPage;
