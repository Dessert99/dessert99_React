import { type Database } from './database.types';

//타입 정제화
export type PostEntity = Database['public']['Tables']['post']['Row'];

export type UseMutationCallback = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};
