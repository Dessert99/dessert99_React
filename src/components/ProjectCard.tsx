import logo from '@/assets/react.svg';
import { CiMenuBurger } from 'react-icons/ci';

type MemberProps = {
  name: string;
  role?: 'leader' | 'member';
};

const MemberName = ({ name, role = 'member' }: MemberProps) => {
  return (
    <div className={`${role === 'leader' ? 'bg-red-400' : 'bg-blue-500'}  p-2 rounded-lg`}>
      {name}
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className=" bg-gray-600 text-white p-3 flex w-full justify-between rounded-lg gap-5">
      <div className="grow-[2] ">
        <img src={logo} alt="로고" className="w-full h-full" />
      </div>
      <section className="grow-[20]">
        <h3 className="text-2xl">트립테일러</h3>
        <p className="text-gray-400">
          당신의 취향에 맞는 특별한 여행 루트를 추천해주는 맞춤형 여행 큐레이터
        </p>
        <div className="flex gap-2 mt-4">
          <MemberName name="이단규" role="leader" />
          <MemberName name="황준호" />
          <MemberName name="이우성" />
          <MemberName name="김유민" />
        </div>
      </section>
      <div className="grow p-2 flex justify-end">
        <CiMenuBurger size={32} />
      </div>
    </div>
  );
};

export default ProjectCard;
/*
rounded = 테두리 둥글게
grow-[20] = flex-grow 속성 값을 20으로 지정하겠다는 정확한 표현


1. Tailwind의 Preflight가 h1~h6를완전 언스타일로 초기화해서 p와 동일해 보이지만 h3이라고 쓰는 이유
    -> 접근성(A11y) : 키보드·스크린리더 탐색을 돕는다 / SEO: 검색엔진이 페이지 주제를 파악할 때 헤딩 계층을 사용
2. grow-20처럼 사용해도 JIT 엔진 덕분에 잘 작동하지만, 어떤 값이든 일관되고 예측 가능하게 사용하기 위해서는 항상 대괄호([])를 사용하는 습관을 들이는 것이 좋다.
*/
