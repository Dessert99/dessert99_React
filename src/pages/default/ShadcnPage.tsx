import Shadcn_Button from '@/components/shadcn/Shadcn_Button';
import Shadcn_Popover from '@/components/shadcn/Shadcn_Popover';

const ShadcnPage = () => {
  return (
    <div className='mx-auto flex max-w-6xl flex-col border'>
      <header className='border-2 p-5 text-center'>
        <div className='text-3xl font-bold'>여긴 shadcn를 연습하는 페이지입니다.</div>
      </header>
      <main className='px-4'>
        <div className='flex flex-col gap-5 border-2 border-black p-5'>
          <div className='bold text-2xl'>첫 번째: Button</div>
          <Shadcn_Button />
        </div>
        <div className='flex flex-col gap-5 border-2 border-black p-5'>
          <div className='bold text-2xl'>두 번째: Popover</div>
          <Shadcn_Popover />
        </div>
      </main>
    </div>
  );
};

export default ShadcnPage;
