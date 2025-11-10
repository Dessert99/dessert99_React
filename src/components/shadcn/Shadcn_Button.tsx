import { Button } from '../ui/button';
import { ArrowUpIcon, ArrowUpRightIcon } from 'lucide-react';

export default function Shadcn_Button() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'>1. size props에 따른 시각적 스타일 차이</div>
        <div className='flex gap-5'>
          <Button size='default'>size='default'</Button>
          <Button size='sm'>size='sm'</Button>
          <Button size='lg'>size='lg'</Button>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'>2. 아이콘</div>
        <div className='flex gap-5'>
          <Button size='icon'>
            <ArrowUpRightIcon />
          </Button>
          <Button size='icon-sm'>
            <ArrowUpRightIcon />
          </Button>
          <Button size='icon-lg'>
            <ArrowUpRightIcon />
          </Button>
          <Button variant='outline'>
            <ArrowUpRightIcon /> New Branch
          </Button>
          <Button variant='destructive'>
            <ArrowUpRightIcon /> New Branch
          </Button>
          <Button variant='ghost'>
            <ArrowUpRightIcon /> New Branch
          </Button>
          <Button variant='link'>
            <ArrowUpRightIcon /> New Branch
          </Button>
          <Button variant='outline'>
            <ArrowUpRightIcon /> New Branch
          </Button>
          <Button variant='secondary'>
            <ArrowUpRightIcon /> New Branch
          </Button>
          <Button
            variant='outline'
            size='icon'
            className='rounded-full'>
            <ArrowUpIcon />
          </Button>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col gap-2'>
        <div className='text-xl underline'>3. variant prop에 따른 시각적 스타일 차이</div>
        <div className='flex gap-5'>
          {/* 가장 표준이 되는 버튼입니다. 일반적으로 채워진 배경색(기본 테마 색상)을 가지며 가장 눈에 띄게 디자인됩니다. */}
          {/* 페이지에서 가장 중요한 동작 (예: '제출', '로그인', '저장')에 사용됩니다. */}
          <Button variant={'default'}>variant=default</Button>

          {/* 사용자의 주의를 끌기 위해 주로 빨간색으로 디자인됩니다. */}
          {/* 되돌리기 어려운 위험한 동작 (예: '삭제', '계정 탈퇴', '즉시 종료')을 나타낼 때 사용합니다. */}
          <Button variant={'destructive'}>variant=destructive</Button>

          {/* 배경색과 테두리가 모두 없는, 텍스트만 보이는 스타일입니다. 마우스를 올렸을 때만 약한 배경색이 나타납니다. */}
          {/* 시각적으로 가장 덜 방해되어야 하는, 중요도가 낮은 부가적인 동작에 사용됩니다. (예: 툴바의 아이콘 버튼, 카드 내의 '더보기') */}
          <Button variant={'ghost'}>variant=ghost</Button>

          {/* 일반적인 하이퍼링크(<a> 태그)처럼 보입니다. 밑줄이 있고 텍스트 색상만 있습니다. */}
          {/* 기능적으로는 버튼이지만 시각적으로는 링크처럼 보여야 할 때 사용합니다. (예: '비밀번호를 잊으셨나요?', '자세히 보기') */}
          <Button variant={'link'}>variant=link</Button>

          {/* 배경색이 없고 테두리(outline)만 있습니다. 마우스를 올리면 배경색이 채워지는 경우가 많습니다. */}
          {/* default보다는 덜 중요하지만 secondary보다는 강조하고 싶은, 두 번째로 중요한 동작에 적합합니다. (예: '둘러보기', '자세히 알기') */}
          <Button variant={'outline'}>variant=outline</Button>

          {/* default보다 덜 강조되는 스타일입니다. 보통 회색조나 연한 배경색을 사용합니다. */}
          {/* default 버튼(예: '확인') 옆에 위치하는 보조적인 동작 (예: '취소', '닫기')에 많이 사용됩니다. */}
          <Button variant={'secondary'}>variant=secondary</Button>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
