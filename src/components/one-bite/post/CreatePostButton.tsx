import { useModalOpen } from '@/store/postModalStore';
import { PlusCircleIcon } from 'lucide-react';

export default function CreatePostButton() {
  const openModal = useModalOpen();
  return (
    <div
      onClick={openModal}
      className='bg-muted text-muted-foreground flex cursor-pointer items-center justify-between rounded-xl px-6 py-4'>
      <div>나누고 싶은 이야기가 있나요?</div>
      <PlusCircleIcon className='h-5 w-5' />
    </div>
  );
}
