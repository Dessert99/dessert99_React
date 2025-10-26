import { createClient } from '@supabase/supabase-js';
import { type Database } from '@/types/database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient<Database>(supabaseUrl, supabaseKey); // supabase 클라이언트가 데이터베이스 타입을 참고한다.

export default supabase;
