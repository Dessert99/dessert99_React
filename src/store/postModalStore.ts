import { create } from 'zustand';
import { combine, devtools } from 'zustand/middleware';

const initailStates = {
  isOpen: false,
};

const usePostModalStore = create(
  devtools(
    combine(initailStates, (set) => ({
      actions: {
        open: () => {
          set({ isOpen: true });
        },
        close: () => {
          set({ isOpen: false });
        },
      },
    })),
    { name: 'postModalStore' },
  ),
);

export const useModalOpen = () => {
  const open = usePostModalStore((store) => store.actions.open);
  return open;
};

export const useAllModal = () => {
  const {
    isOpen,
    actions: { open, close },
  } = usePostModalStore();
  return { isOpen, open, close };
};
