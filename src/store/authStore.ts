import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';
import type { Session } from '@supabase/supabase-js';

interface State {
  isLoaded: boolean;
  session: Session | null;
}

const initailStates: State = {
  isLoaded: false,
  session: null,
};

const useAuthStore = create(
  devtools(
    combine(initailStates, (set) => ({
      action: {
        setSession: (session: Session | null) => {
          set({ session, isLoaded: true });
        },
      },
    })),
    {
      name: 'sessionStore', // devtools
    },
  ),
);

export const useSession = () => {
  const session = useAuthStore((store) => store.session);
  return session;
};

export const useIsLoaded = () => {
  const isLoaded = useAuthStore((store) => store.isLoaded);
  return isLoaded;
};
export const useSetSession = () => {
  const setSession = useAuthStore((store) => store.action.setSession);
  return setSession;
};
