import { Link, Outlet } from 'react-router';
import { House, NotebookPen, Coffee, User } from 'lucide-react';

export default function LikeLionLayout() {
  return (
    <div className='bg-likelion-background mx-auto flex min-h-screen max-w-xl flex-col border-2 border-black'>
      <main className='flex w-full flex-1 flex-col'>
        <Outlet />
      </main>
      <footer className='flex w-full justify-evenly border-t-2 p-2'>
        <Link to={'/likelion'}>
          <div className='flex flex-col items-center text-sm'>
            <House />홈
          </div>
        </Link>
        <Link to={'/likelion/study'}>
          <div className='flex flex-col items-center text-sm'>
            <NotebookPen />
            스터디룸
          </div>
        </Link>
        <Link to={'/likelion/collection'}>
          <div className='flex flex-col items-center text-sm'>
            <Coffee />
            컬렉션
          </div>
        </Link>
        <div className='flex flex-col items-center text-sm'>
          <User />내 프로필
        </div>
      </footer>
    </div>
  );
}

/*

*/
