import { Button } from '@/components/ui/button';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

//타입
type Todo = {
  id: number;
  content: string;
  isDone: boolean;
};

//쿼리 키 상수화
const QUERY_KEYS = {
  todo: {
    all: ['todo'],
    list: ['todo', 'list'],
    detail: (id: string) => ['todo', 'detail', id],
  },
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

const createTodo = async (content: string) => {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    body: JSON.stringify({
      content,
      isDone: false,
    }),
  });
  const data: Todo = await response.json();
  return data;
};

//Query 훅
function useExampleQuery() {
  return useQuery({
    queryFn: fetchTodos, // 컴포넌트가 마운트 되었을 때 queryFn실행
    queryKey: QUERY_KEYS.todo.list, // 그 결과값을 todos라는 이름으로 저장한다. = todos라는 값으로 캐싱된다.
    retry: 2, // 재시도 두 번
    staleTime: 5000, // 5초 동안 fresh (5초~30초가 일반적). stale상태일 때 카운팅
    gcTime: 5 * 60 * 1000, // inactive상태에서 5분 뒤 메모리에서 삭제. inactive상태일 때 카운팅
    //리페치 설정
    // refetchOnMount: true,
    // refetchOnWindowFocus: false,
    // refetchOnReconnect: false,
    // refetchInterval: false,
    // refetchInterval: 3000, // 3초마다 리페치
  });
}
/*
💡 useQuery
- 데이터 조회 요청만 해당한다.

💡 useMutation
- 데이터를 추가하거나 삭제할 때 사용한다.

⭐️ 리페칭 (데이터 다시 불러오기)
1. Mount: 이 캐시 데이터를 사용하는 컴포넌트가 마운트 되었을 때
2. WindowFocus: 사용자가 이 탭에 다시 돌아왔을 때
3. Reconnect: 인터넷 연결이 끊어졌다가 다시 연결되었을 때
4. Interval: 특정한 주기로

⭐️ stale 데이터도 쓰긴 한다.
- 최대한 로딩 화면을 안 보여주게끔 최적화

⭐️ queryKey
- 배열 전체를 하나의 키로 본다.
- 이 키를 무효화하면 리페치한다. (Mutation에서 무효화)
*/

// Mutation
function useExampleMutation() {
  const queryClient = useQueryClient(); // 캐시 데이터가 담겨있는 저장소를 불러온다.

  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    //요청이 종료되었을 때
    onSettled: () => {},
    //요청이 성공했을 때
    onSuccess: (newTodo) => {
      // queryClient.invalidateQueries({
      //   queryKey: [QUERY_KEYS.todo.list], // todos라는 쿼리키를 갖는 모든 캐시 데이터가 무효화된다.
      // });
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [newTodo];
        return [...prevTodos, newTodo];
      });
    },
    // 요청에 실패했을 때. error객체가 담긴다.
    onError: (error) => console.error(error),
  });
}
/*
⭐️ onMutate
- 요청이 발송되었을 때 실행된다.
- mutate함수의 인수로 전달되는 값이 onMutate의 매개변수가 된다.
- 낙관적 업데이트를 여기서 설정하면 된다.

⭐️ invalidateQueries
- 해당 쿼리 키를 무효화하여 리페칭시킨다.

⭐️ setQueryData
- 캐시를 무효화하지 않고, 새로운 아이템을 추가하는 방식이다. (리페칭없다)
*/

//컴포넌트
export default function ExampleComponent() {
  const { data, isLoading, error } = useExampleQuery();
  const { mutate, isPending } = useExampleMutation();
  // isPending은 비동기 처리의 로딩 상태를 반환한다.

  if (error) return <div>오류 발생</div>;
  if (isLoading) return <div>로딩중</div>;

  return (
    <>
      <div className="p-30">
        {data?.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
        <Button
          disabled={isPending}
          onClick={() => {
            mutate('안녕하세요');
          }}
        >
          클릭
        </Button>
      </div>
    </>
  );
}
