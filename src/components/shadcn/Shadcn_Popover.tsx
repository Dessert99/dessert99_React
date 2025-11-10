import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '../ui/button';
import Shadcn_Button from './Shadcn_Button';

export default function Shadcn_Popover() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'>1. 기본 구성</div>
        <div className='flex gap-5'>
          <Popover>
            <PopoverTrigger>popover 트리거. 클릭하시오</PopoverTrigger>
            <PopoverContent>Place content for the popover here. 이 내용이 나옵니다.</PopoverContent>
          </Popover>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'>2. 버튼 컴포넌트로 팝오버</div>
        <div className='flex gap-5'>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'}>PopoverTrigger에 asChild속성이 필요합니다.</Button>
            </PopoverTrigger>
            <PopoverContent className='w-full'>
              asChild를 넣지 않으면 HTML 렌더링이 꼬이고, 접근성(a11y) 문제가 발생하며, 스타일이
              깨질 수 있습니다
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'>3. PopoverContent에 컨텐츠 넣기 </div>
        <div className='flex gap-5'>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'default'}>클릭</Button>
            </PopoverTrigger>
            <PopoverContent className='w-full'>
              <Shadcn_Button />
              PopoverContent의 너비를 w-full 해주면 모든 컨텐츠를 담을 수 있습니다.
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
