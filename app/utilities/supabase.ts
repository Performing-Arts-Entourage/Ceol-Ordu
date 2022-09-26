import { createClient } from '@supabase/supabase-js';

const options = {
    headers: { 'x-app': 'PAE Ceol Ordu' }
};

const supabaseKey = process.env.SUPABASE_KEY || '';
const supabaseUrl = process.env.SUPABASE_URL || '';

export const supabase = createClient(supabaseUrl, supabaseKey, options);
