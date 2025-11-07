import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useAllModal } from '@/store/postModalStore';
import { ImageIcon } from 'lucide-react';

//  index페이지에 포함되는 위치면 어디든 넣을 수 있다. (모달 상태를 전역으로 관리하기 때문)
export default function PostModal() {
  const { isOpen, close } = useAllModal();

  // 모달 닫는 핸들러
  const handleClostModal = () => {
    close();
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleClostModal}>
      <DialogContent
        // 최대 화면의 90%까지 채우도록 한다
        className='max-h-[90vh]'>
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea
          className='text-muted-foreground max-h-125 min-h-25 focus:outline-none'
          placeholder='무슨 일이 있었나요?'
        />
        <Button
          variant={'outline'}
          className='cursor-pointer'>
          <ImageIcon />
          이미지 추가
        </Button>
        <Button className='cursor-pointer'>저장</Button>
      </DialogContent>
    </Dialog>
  );
}
