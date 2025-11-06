import logo from '@/assets/react.svg';

function GlobalLoader() {
  return (
    <div className='bg-muted flex h-screen w-screen items-center justify-center'>
      <div className='flex animate-bounce gap-5'>
        <img
          src={logo}
          alt='logo'
          className='w-10'
        />
        <div className='text-2xl font-bold'>로딩 중입니다~</div>
      </div>
    </div>
  );
}

export default GlobalLoader;

/*
h-screen : 화면(viewport) 높이를 100%로 설정 (height: 100vh)
w-screen : 화면(viewport) 너비를 100%로 설정 (width: 100vw)
animate-bounce  // 위아래로 통통 튀는 바운스 애니메이션 적용
*/
