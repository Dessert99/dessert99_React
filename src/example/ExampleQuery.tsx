import { useQuery } from '@tanstack/react-query';

//타입
type Todo = {
  id: number;
  content: string;
  isDone: boolean;
};

//api로직
const fetchTodos = async () => {
  const response = await fetch('http://localhost:3000/todos');
  if (!response.ok) {
    throw new Error('실패');
  }
  const data: Todo[] = await response.json();
  return data;
};

//쿼리 훅
function useExampleQuery() {
  return useQuery({
    queryFn: fetchTodos, // 컴포넌트가 마운트 되었을 때 queryFn실행
    queryKey: ['todos'], // 그 결과값을 todos라는 이름으로 저장한다. = todos라는 값으로 캐싱된다.
    retry: 2, // 재시도 두 번
    staleTime: 5000, // 5초 동안 fresh (5초~30초가 일반적)

    // refetchInterval: 3000, // 3초마다 리페치

    //리페치 설정
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
  });
}
/*
⭐️ 리페칭 (데이터 다시 불러오기)
1. Mount: 이 캐시 데이터를 사용하는 컴포넌트가 마운트 되었을 때
2. WindowFocus: 사용자가 이 탭에 다시 돌아왔을 때
3. Reconnect: 인터넷 연결이 끊어졌다가 다시 연결되었을 때
4. Interval: 특정한 주기로

⭐️ stale 데이터도 쓰긴 한다.
- 최대한 로딩 화면을 안 보여주게끔 최적화

⭐️ queryKey
- 배열 전체를 하나의 키로 본다.

*/

//컴포넌트
export default function ExampleComponent() {
  const { data, isLoading, error } = useExampleQuery();

  if (error) return <div>오류 발생</div>;
  if (isLoading) return <div>로딩중</div>;

  return (
    <>
      <div className="p-30">
        {data?.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </div>
    </>
  );
}
