function AnimationPage() {
  return (
    <div className='flex flex-col gap-10 p-5'>
      <div className='flex flex-col gap-5'>
        <div>심장박동</div>
        <div className='animate-pulseSpread h-3 w-50 bg-blue-500'></div>
        <div className='hover:animate-pulseSpread h-3 w-50 bg-blue-500'></div>
      </div>
      <div>
        <div>스핀</div>
        <div className='mr-3 size-5 animate-spin'>안녕하세요</div>
      </div>
      <div>
        <div>점</div>
        <span className='relative flex size-3'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
          <span className='relative inline-flex size-3 rounded-full bg-sky-500'></span>
        </span>
      </div>
      <div className='mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4'>
        <div className='flex animate-pulse space-x-4'>
          <div className='size-10 rounded-full bg-gray-200'></div>
          <div className='flex-1 space-y-6 py-1'>
            <div className='h-2 rounded bg-gray-200'></div>
            <div className='space-y-3'>
              <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-2 h-2 rounded bg-gray-200'></div>
                <div className='col-span-1 h-2 rounded bg-gray-200'></div>
              </div>
              <div className='h-2 rounded bg-gray-200'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationPage;
