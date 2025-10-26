import { type Database } from './database.types';

//타입 정제화
export type PostEntity = Database['public']['Tables']['post']['Row'];
