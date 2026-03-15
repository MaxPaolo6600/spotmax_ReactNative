import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://cbgykgcvcyiigyjajnoz.supabase.co";
const supabaseAnonKey = "sb_publishable_fQO-TyK-GMXSqMK6NRTvPQ_f31mZ6z8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
