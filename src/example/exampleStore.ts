import { create } from 'zustand';
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//   };
// };

// 미들웨어 순서 중요
export const useExampleStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set) => ({
            actions: {
              //   increase: () => set((state) => ({ count: state.count + 1 })),
              increase: () =>
                set((state) => {
                  state.count += 1;
                }),
              //   decrease: () => set((state) => ({ count: state.count - 1 })),
              decrease: () =>
                set((state) => {
                  state.count -= 1;
                }),
            },
          })),
        ),
      ),
      {
        name: 'countStore',
        partialize: (store) => ({ count: store.count }),
        storage: createJSONStorage(() => sessionStorage), // 세션 스토리지에 저장
      },
    ),
    {
      name: 'useExampleStore', // devtools
    },
  ),
);

useExampleStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count, prevCount);
  }, // 이제 count값이 없데이트 될 떄마다, count값과 그 이전 값인 prevCount가 출력된다.
);

// export const useExampleStore = create<Store>((set) => ({
//   count: 0,
//   actions: {
//     increase: () => set((store) => ({ count: store.count + 1 })),
//     decrease: () => set((store) => ({ count: store.count - 1 })),
//   },
// }));

// 커스텀 훅
export function useCount() {
  const count = useExampleStore((store) => store.count);
  return count;
}
export function useIncrease() {
  const increase = useExampleStore((store) => store.actions.increase);
  return increase;
}
export function useDecrease() {
  const decrease = useExampleStore((store) => store.actions.decrease);
  return decrease;
}

/*
⭐️ store란?
- 전역 상태인 state와 해당 상태를 실제로 업데이트하는 액션 함수들이 포함된 객체
- 즉, create는 state, action함수를 포함하는 객체인 store를 생성한다.

⭐️ get() 함수
- create가 반환하는 store객체 자체를 반환한다.
- get().상태 로 접근할 수 있다.

⭐️ set() 함수
- 전달한 인수로 스토어를 업데이트한다.
- 명시된 프로퍼티 값만 업데이트하고, 나머지 프로퍼티는 건들지 않는다.
- 함수형 업데이트를 지원한다. set() 안에 ()=>{} 를 사용하면 get()을 생략할 수 있다.

⭐️ 셀렉터 함수
- const increase = useExampleStore((store)=> store.increase) 처럼 사용하면 불필요한 리렌더링을 방지할 수 있다.
- 스토어로부터 특정한 값만 불러온다.
- 근데 대규모에서는 유지보수 측면에서 별로다. -> 커스텀 훅을 만든다.

⭐️ actions로 묶기
- 액션 함수를 묶으면 한 번에 가져올 수 있다.
- const {increase, decrease} = useExampleStore((store)=> store.actions);

⭐️ 커스텀 훅으로 만들어 내보내기
- 이처럼 상태와 액션 함수들을 커스텀 훅으로 만들어 내보내면 유지보수를 이 스토어에서 모두 처리할 수 있어 편리하다.

⭐️ 미들웨어 - combine
- Store의 타입을 자동 추론
- 상태와 액션 함수끼리 분리해서 작성하여 타입 추론이 자동으로 되도록한다.

⭐️ 미들웨어 - immer
- Store 내부의 상태 업데이트를 보다 편리하게 바꿈

⭐️ 미들웨어 - subscribeWithSelector
- Store 내의 특정 값 변화시, 이벤트 핸들러 호출
- useEffect와 기능이 비슷하다.

⭐️ 미들웨어 - persist
- Store를 로컬, 세션 스토리지 등에 보관
- name은 스토리지에 저장될 key 이름이다.
- 로컬스토리지에는 JSON으로 파싱되어 저장되기 떄문에 액션함수는 빈 객체로 들어간다.
- partialize로 스토리지에 저장할 요소를 명시해야 한다.
- storage로 저장할 스토리지 종류도 정할 수 있다.

⭐️ 미들웨어 - devtools
- Store의 값을 개발자 도구에서 확인할 수 있음.
*/
