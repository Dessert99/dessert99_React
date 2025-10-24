import { createRoot } from 'react-dom/client';
import '@/index.css';
import Router from './routes';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient(); // 모든 서버 상태를 저장하는 스토어

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <Router />
    <Toaster />
  </QueryClientProvider>,
);
