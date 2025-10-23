import { createRoot } from 'react-dom/client';
import '@/index.css';
import Router from './routes';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <>
    <Router />
    <Toaster />
  </>,
);
