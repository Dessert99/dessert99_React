import homeLogo from '@/assets/likelion-home.png';
import homeLight from '@/assets/likelion-home-light.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className='box-border flex flex-col'>
      <div className='bg-likelion-brwon-400 flex justify-around'>
        <div className='flex flex-col'>
          <img
            className='mb-5 w-20'
            src={homeLight}
            alt=''
          />
          <div className='text-lg text-white'>
            000님, 안녕하세요! <br />
          </div>
          <div className='text-sm text-white'>바로 시작해볼까요?</div>
          <Button
            className='bg-likelion-brwon-200 text-md my-3 cursor-pointer rounded-2xl'
            variant={'outline'}
            size={'lg'}>
            공부하기
          </Button>
        </div>
        <div className='flex flex-col items-center justify-end'>
          <img
            className='w-40'
            src={homeLogo}
            alt=''
          />
        </div>
      </div>
      <div className='grid h-100 grid-cols-2 grid-rows-6 gap-5 bg-white p-5'>
        <Card className='col-start-1 row-span-2 row-start-1'>
          <CardHeader>
            <CardTitle>오늘 공부량</CardTitle>
          </CardHeader>
          <CardContent>안녕</CardContent>
        </Card>
        <Card className='col-start-2 row-span-3 row-start-1'>
          <CardHeader>
            <CardTitle>과제 달성률</CardTitle>
          </CardHeader>
          <CardContent>안녕</CardContent>
        </Card>
        <Card className='col-start-1 row-span-4 row-start-3'>
          <CardHeader>
            <CardTitle>주간 공부량</CardTitle>
          </CardHeader>
          <CardContent>안녕</CardContent>
        </Card>
        <Card className='col-start-2 row-span-3 row-start-4'>
          <CardHeader>
            <CardTitle>하루평균공부량</CardTitle>
          </CardHeader>
          <CardContent>안녕</CardContent>
        </Card>
      </div>
    </div>
  );
}

/*
col-start-x : x번째 세로 그리드 라인에서 시작하라는 뜻. (왼→오)

row-start-x : x번째 가로 그리드 라인에서 시작하라는 뜻. (위→아래)

row-span-n / col-span-n : 시작한 위치에서 행/열 트랙을 n칸만큼 차지하라는 뜻. 즉 row-span-3이면 “기준 행 높이 × 3 + 행 간격”만큼의 높이가 됨.
*/
