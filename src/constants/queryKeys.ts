// 쿼리 키 팩토리
export const QUERY_KEYS = {
  profile: {
    all: ['profile'],
    list: ['profile', 'list'],
    byId: (userId: string) => ['profile', 'byId', userId],
  },
};
