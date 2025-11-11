import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function DefaultHome() {
  return (
    <div className='flex flex-col gap-30 p-10'>
      <div className='flex justify-center gap-10'>
        <Button asChild>
          <Link to={'/onebite'}>한 입 페이지로 가기</Link>
        </Button>
        <Button asChild>
          <Link to={'/mycompany'}>회사 홈페이지 만들기로 가기</Link>
        </Button>
      </div>
      <div className='flex justify-center gap-10'>
        <Button asChild>
          <Link to={'/tailwind'}>Tailwind 연습하러 가기</Link>
        </Button>
        <Button asChild>
          <Link to={'/shadcn'}>shadcn 연습하러 가기</Link>
        </Button>
      </div>
      <div className='flex justify-center gap-10'>
        <Button asChild>
          <Link to={'/likelion'}>멋사 프로젝트 실습해보기</Link>
        </Button>
      </div>
    </div>
  );
}
