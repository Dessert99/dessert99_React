import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useCreatePost } from '@/hooks/queries/usePost';
import { useAllModal } from '@/store/postModalStore';
import { ImageIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

//  index페이지에 포함되는 위치면 어디든 넣을 수 있다. (모달 상태를 전역으로 관리하기 때문)
export default function PostModal() {
  const { isOpen, close } = useAllModal();
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { mutate: createPost, isPending } = useCreatePost({
    onSuccess: () => {
      close(); // 포스트 요청이 성공적이라면 모달을 닫는다.
    },
    onError: () => {
      toast.error('포스트 생성에 실패하였습니다.', { position: 'top-center' });
    },
  });

  // 모달 닫는 핸들러
  const handleClostModal = () => {
    close();
  };

  // 제출 핸들러
  const handleSubmitPost = () => {
    if (content.trim() === '') return;
    createPost(content);
  };

  useEffect(() => {
    // textareaRef 참조값이 있을 때 실행. 에러 방지용 가드
    if (textareaRef.current) {
      // 2. (가장 중요!) 높이를 'auto'로 설정하여 textarea의 높이를 초기화합니다.
      //    이것이 없으면, 텍스트를 삭제할 때 textarea의 높이가 줄어들지 않습니다.
      //    'auto'로 설정하면 브라우저가 먼저 내용에 맞게 높이를 재계산할 준비를 합니다.
      textareaRef.current.style.height = 'auto';

      // 3. 'scrollHeight' 값을 읽어와서 textarea의 실제 높이로 설정합니다.
      //    'scrollHeight'는 스크롤바를 포함하지 않은 *내용물 전체의 실제 높이*입니다.
      //    2번에서 'auto'로 재설정했기 때문에, 현재 content에 딱 맞는 scrollHeight 값을 얻을 수 있습니다.
      //    'px' 단위를 붙여 CSS의 height 속성으로 적용합니다.
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  useEffect(() => {
    if (!isOpen) return; //모달이 닫힐 때 이 동작이 실행되지 않는다.
    textareaRef.current?.focus(); // 모달 열리면 입력창 포커스
    setContent('');
  }, [isOpen]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={handleClostModal}>
      <DialogContent
        // 최대 화면의 90%까지 채우도록 한다
        className='max-h-[90vh]'>
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea
          disabled={isPending} // 로딩 상태 처리
          ref={textareaRef}
          className='text-muted-foreground max-h-125 min-h-25 focus:outline-none'
          placeholder='무슨 일이 있었나요?'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          variant={'outline'}
          className='cursor-pointer'>
          <ImageIcon />
          이미지 추가
        </Button>
        <Button
          disabled={isPending} // 로딩 상태 처리
          onClick={handleSubmitPost}
          className='cursor-pointer'>
          저장
        </Button>
      </DialogContent>
    </Dialog>
  );
}
