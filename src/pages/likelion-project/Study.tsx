import { Plus } from 'lucide-react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko'); // 한국어 요일/상대시간 등
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { DUMMY_MYSTUDYROOM } from '@/constants/dummy';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export default function Study() {
  const now = dayjs().format('M월 D일 dddd'); // day.js()는 오늘 날짜 객체 생성

  return (
    <>
      <header className=''>
        <div className='flex justify-between p-4 px-10'>
          <div />
          <div className='text-2xl font-bold'>나의 스터디룸</div>

          <Popover>
            <PopoverTrigger>
              <Plus />
            </PopoverTrigger>
            <PopoverContent
              className='flex w-auto border-none bg-transparent p-0 shadow-none' // w-auto는 기본 너비 대신 내용물(버튼)의 너비에 맞게 줄여줍
            >
              <Button
                asChild
                className='bg-likelion-brwon-300 rounded-2xl p-5'>
                <Link to={'/likelion/create-study'}>생성하기</Link>
              </Button>
            </PopoverContent>
          </Popover>
        </div>
        <div className='text-center text-sm'>{now}</div>
      </header>
      <main className='my-auto'>
        <Carousel // 바깥 껍데기
          className=''>
          <CarouselContent // 트랙(슬라이드들을 가로/세로로 배치)
            className='mx-7' // 트랙에서 mx으로 간격을 조정
          >
            {DUMMY_MYSTUDYROOM.map((item) => (
              <CarouselItem //슬라이드 1칸. 한 화면에 몇 장 보일지”, “간격”을 주로 여기서 조절.
                key={item.id}
                className='px-4' // basis-1/2으로 2장 보이게 가능
              >
                <Link to={`/likelion/study/${item.id}`}>
                  <Card className='bg-likelion-brwon-200'>
                    <CardHeader className=''>
                      <CardTitle className='text-2xl'>{item.title}</CardTitle>
                      <CardDescription className='border-b-2 py-1 text-lg'>
                        {item.tag}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className=''>
                      <div className='flex flex-col gap-5 px-5'>
                        <div>{item.sessionInfo}</div>
                        <div>{item.minStudyTime}</div>
                        <div>{`스터디 인원 ${item.currentMembers}명 / ${item.maxMembers}명 `}</div>
                        <div>현재 세션: {item.currentSession}회차</div>
                      </div>
                      <div className='ml-auto w-40'>
                        <img
                          className='w-full rounded-4xl'
                          src={item.image}
                          alt='없음'
                        />
                      </div>
                    </CardContent>
                    <CardFooter className='flex flex-col gap-2'>
                      <div
                        className='self-start text-sm text-white' // align-self 속성이란? -> align-self는 Flexbox 또는 Grid 컨테이너 내부의 **개별 아이템(자식 요소)**에 적용하는 속성입니다.
                      >
                        Progress
                      </div>
                      <Progress
                        //[&>div] 하면 "채워지는 부분" 색을 입힐 수 있다.
                        className='h-3 bg-black [&>div]:bg-white'
                        value={item.progress}
                      />
                      <div className='self-end text-sm text-white'>{item.progress}%</div>
                    </CardFooter>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
    </>
  );
}
