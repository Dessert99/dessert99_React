import americanoImg from '@/assets/collection_1_Americano.png';
import correttoImg from '@/assets/collection_2_Corretto.png';
import espressoRomanoImg from '@/assets/collection_3_EspressoRomano.png';
import espressoImg from '@/assets/collection_4_Espresso.png';
import galaoImg from '@/assets/collection_5_Galao.png';
import latteImg from '@/assets/collection_6_Latte.png';
import lungoImg from '@/assets/collection_7_Lungo.png';

export interface MyStudyType {
  id: number;
  tag: string;
  title: string;
  sessionInfo: string;
  minStudyTime: string;
  currentMembers: number;
  maxMembers: number;
  currentSession: number;
  progress: number;
  image: string; // 번들러가 처리한 최종 URL(문자열)이 저장되므로 string 타입이 맞습니다.
}

export const DUMMY_MYSTUDYROOM: MyStudyType[] = [
  {
    id: 1,
    title: '알고리즘',
    tag: '8주 플랜',
    sessionInfo: '주간 세션: 2회 / 총 16회',
    minStudyTime: '세션 최소 공부량: 2시간',
    currentMembers: 12,
    maxMembers: 20,
    currentSession: 5,
    progress: 31,
    image: americanoImg, // 수정
  },
  {
    id: 2,
    title: 'React Native 마스터',
    tag: '12주 플랜',
    sessionInfo: '주간 세션: 1회 / 총 12회',
    minStudyTime: '세션 최소 공부량: 3시간',
    currentMembers: 8,
    maxMembers: 10,
    currentSession: 10,
    progress: 83,
    image: espressoImg, // 수정
  },
  {
    id: 3,
    title: '데이터베이스 모델링',
    tag: '6주 플랜',
    sessionInfo: '주간 세션: 2회 / 총 12회',
    minStudyTime: '세션 최소 공부량: 1.5시간',
    currentMembers: 18,
    maxMembers: 20,
    currentSession: 2,
    progress: 16,
    image: lungoImg, // 수정
  },
  {
    id: 4,
    title: '네트워크 기본',
    tag: '4주 플랜',
    sessionInfo: '주간 세션: 3회 / 총 12회',
    minStudyTime: '세션 최소 공부량: 1시간',
    currentMembers: 5,
    maxMembers: 15,
    currentSession: 12,
    progress: 100,
    image: correttoImg, // 수정
  },
  {
    id: 5,
    title: 'Tailwind CSS 실전',
    tag: '단기 플랜',
    sessionInfo: '주간 세션: 4회 / 총 8회',
    minStudyTime: '세션 최소 공부량: 2시간',
    currentMembers: 20,
    maxMembers: 20,
    currentSession: 7,
    progress: 87,
    image: galaoImg, // 수정
  },
  {
    id: 6,
    title: 'JS 알고리즘 챌린지',
    tag: '10주 플랜',
    sessionInfo: '주간 세션: 2회 / 총 20회',
    minStudyTime: '세션 최소 공부량: 2시간',
    currentMembers: 10,
    maxMembers: 25,
    currentSession: 1,
    progress: 5,
    image: espressoRomanoImg, // 수정
  },
  {
    id: 7,
    title: 'React Query 정복',
    tag: '3주 플랜',
    sessionInfo: '주간 세션: 3회 / 총 9회',
    minStudyTime: '세션 최소 공부량: 1시간',
    currentMembers: 7,
    maxMembers: 10,
    currentSession: 4,
    progress: 44,
    image: latteImg, // 수정
  },
  {
    id: 8,
    title: 'TypeScript 기초',
    tag: '5주 플랜',
    sessionInfo: '주간 세션: 2회 / 총 10회',
    minStudyTime: '세션 최소 공부량: 2시간',
    currentMembers: 14,
    maxMembers: 15,
    currentSession: 9,
    progress: 90,
    image: americanoImg, // 수정 (반복)
  },
  {
    id: 9,
    title: 'Git & GitHub 스터디',
    tag: '자율 스터디',
    sessionInfo: '주간 세션: 1회 / 총 5회',
    minStudyTime: '세션 최소 공부량: 1시간',
    currentMembers: 30,
    maxMembers: 30,
    currentSession: 3,
    progress: 60,
    image: espressoImg, // 수정 (반복)
  },
  {
    id: 10,
    title: 'shadcn/ui 컴포넌트',
    tag: '4주 플랜',
    sessionInfo: '주간 세션: 2회 / 총 8회',
    minStudyTime: '세션 최소 공부량: 2.5시간',
    currentMembers: 9,
    maxMembers: 10,
    currentSession: 8,
    progress: 100,
    image: lungoImg, // 수정 (반복)
  },
];
