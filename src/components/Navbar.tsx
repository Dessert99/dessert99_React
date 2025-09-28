import { useState } from 'react';
import { Link } from 'react-router-dom';
//아이콘
import { HiMenu, HiX } from 'react-icons/hi';

// 메뉴 아이템 타입
type Menu = {
  path: string;
  label: string;
};

// MenuItem props 타입. 인터섹션(&) 으로 Menu 속성 + 선택(onClick?)을 합친 형태.
type MenuItemProps = Menu & {
  onClick?: () => void; // 이벤트 객체 안쓰면 이렇게 간단히
};

// 리터럴 유니온으로 좁히기
type Language = 'ko' | 'en';

// 메뉴 아이템 데이터
const MENU: Menu[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'about' },
  { path: '/board', label: 'board' },
  { path: '/leadership', label: 'leadership' },
  { path: '/service', label: 'service' },
  { path: '/contact', label: 'contact' },
  { path: '/projects', label: 'projects' },
];

//메뉴 개별 요소 컴포넌트
const MenuItem = ({ path, label, onClick }: MenuItemProps) => {
  return (
    <li>
      <Link to={path} className="hover:text-blue-600 transition duration-300" onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('ko');
  return (
    <nav className="sticky top-0 left-0 w-full  bg-white text-black p-4 shadow-lg z-50">
      <div className="container mx-auto flex  justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8">
          <Link to="/">멋쟁이사자처럼</Link>
        </h1>
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-8 text-lg">
            {MENU.map(item => {
              // {...item} : 객체 스프레드로, 객체의 각 키를 같은 이름의 props로 펼쳐서 전달
              return <MenuItem key={item.path} {...item} />;
            })}
          </ul>
        </div>

        <select
          value={language}
          onChange={e => setLanguage(e.target.value as Language)} // 타입 단언
          className="hidden lg:block border rounded-md px-3 bg-white hover:border-blue-500 transition duration-300"
        >
          <option value="ko">한국어</option>
          <option value="en">영어</option>
        </select>

        {/* 모바일 환경 메뉴 아이콘*/}
        <button className="lg:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} aria-label="메뉴">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* 모바일 환경 슬라이드 바*/}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
          `}
      >
        <div className="p-4">
          <button
            className="text-2xl mb-8 float-right"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="닫기"
          >
            <HiX />
          </button>
          <ul className="clear-both space-y-4 pt-8 text-lg">
            {MENU.map(item => (
              <MenuItem
                key={item.path}
                {...item}
                onClick={() => {
                  setIsOpen(false); // 메뉴 클릭하면 사이드 사라지도록
                  window.scrollTo({ top: 0, behavior: 'smooth' }); // 페이지 이동해서 최상단으로 이동
                }}
              />
            ))}
          </ul>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value as Language)}
            className="border mt-6 w-30 py-1 rounded-md px-3 bg-white hover:border-blue-500 transition duration-300"
          >
            <option value="ko">한국어</option>
            <option value="en">영어</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
sticky top-0 = 상단에 헤더를 고정한다.
z-50 = z-index
container = 좌우 자동 마진
ml-12 = 왼쪽 마진 48px
lg:ml-12 = 화면 폭이 1024px 이상일 때 왼쪽 마진 48px
flex-1 = 남은 공간을 채움
hidden = 보이지 않음(display: none)
hidden lg:flex flex-1 justify-center = 화면 폭이 1024px 이상일 때만 보임.
text-lg = 글자 크기 1.125rem(약 18px)
hover:text-blue-600 = 호버 시 글자색 blue-600
duration-300 = 전환 시간 300ms
hidden lg:block = <1024px엔 숨김(display:none), ≥1024px엔 블록 요소로 표시
border = 1px 테두리 추가
rounded-md = 중간 둥근 모서리(반지름 0.375rem ≈ 6px)
fixed top-0 right-0 = 오른쪽 상단에 고정
h-full = 높이 100%
w-64 = 너비 256px
ease-in-out = 시작·끝은 느리고 중간은 빠르게.
translate-x-0 = (X축 이동 0, 제자리)
translate-x-full = (자기 너비의 100%만큼 오른쪽으로 이동 → 화면 밖으로 밀기
transition: 여러 속성(색상·불투명도·그림자·transform 등)을 한꺼번에 부드럽게 전환하도록 설정
transition-transform: transform만(translate/scale/rotate/skew) 부드럽게 전환하도록 대상 한정
clear-both = 양쪽의 떠있는 요소 영향을 모두 해제해서 다음 줄로 내림(clear: both)
float-right = 요소를 오른쪽으로 부유시켜 왼쪽에 텍스트가 감싸이게 함(float: right)
space-y-4 = 직계 자식들 사이에만 **세로 간격 1rem(≈16px)**을 넣음(첫 번째 자식은 제외)
*/
