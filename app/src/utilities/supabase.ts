import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/variables';
import { createClient, SupabaseClientOptions } from '@supabase/supabase-js';

const options: SupabaseClientOptions<'public'> = {
    auth: {
        autoRefreshToken: true,
        detectSessionInUrl: true,
        persistSession: true
    },
    global: {
        headers: {
            'x-app-id': 'works.pae.ceol-ordu'
        }
    }
};

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, options);

export const useSupabase = () => supabase;
