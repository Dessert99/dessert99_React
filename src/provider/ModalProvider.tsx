import PostModal from '@/components/one-bite/modal/PostModal';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  return (
    <>
      {
        // createPortal를 사용해 특정 DOM 요소를 지정해서 컴포넌트를 그 아래에 렌더링하도록 만들 수 있다. 쓰는 이유 -> 확실히 렌더링 시킬 수 있도록 컴포넌트 계층 구조를 벗어나게 한다.
        createPortal(<PostModal />, document.getElementById('modal-root')!) // modal-root라는 id를 가진 돔 요소를 찾아서 그 아래에 <PostModal/> 를 렌더링 시킨다.
      }
      {children}
    </>
  );
}
