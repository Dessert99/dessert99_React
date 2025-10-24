import { createRoot } from 'react-dom/client';
import '@/index.css';
import Router from './routes';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// 모든 서버 상태를 저장하는 스토어
const queryClient = new QueryClient(/*{
  기본값 설정 가능  
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 5 * 60 * 1000,

      // refetchOnMount: true,
      // refetchOnWindowFocus: false,
      // refetchOnReconnect: false,
      // refetchInterval: false,
    },
  },
}*/);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <Router />
    <Toaster />
  </QueryClientProvider>,
);
