import { Link, Outlet } from 'react-router';
import logo from '@/assets/react.svg';
import { SunIcon } from 'lucide-react';
import avatar from '@/assets/me.jpeg';

export default function OneBiteLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='h-15 border-b'>
        {/*  w-full max-w-175  : 700픽셀까지만 늘어난다. */}
        <div className='m-auto flex h-full w-full max-w-175 justify-between px-8'>
          <Link
            to={'/'}
            className='flex items-center gap-2'>
            <img
              src={logo}
              alt='로고'
              className='h-5'
            />
            <div className='font-bold'>한입 로그</div>
          </Link>
          <div className='flex items-center gap-5'>
            <div className='hover:bg-muted cursor-pointer rounded-full p-2'>
              <SunIcon />
            </div>
            <img
              src={avatar}
              alt='프로필'
              className='h-6'
            />
          </div>
        </div>
      </header>
      <main className='m-auto w-full max-w-175 flex-1 border p-5'>
        <Outlet />
      </main>
      <footer className='text-muted-foreground border-t py-10 text-center'>@interlood</footer>
    </div>
  );
}
