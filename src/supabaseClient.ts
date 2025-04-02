
import { createClient } from "@supabase/supabase-js";

// Check if environment variables are defined
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fallback values for development (optional)
const fallbackUrl = "https://your-supabase-url.supabase.co";
const fallbackKey = "your-anon-key";

// Create Supabase client with environment variables or fallbacks
export const supabase = createClient(
  supabaseUrl || fallbackUrl,
  supabaseAnonKey || fallbackKey
);

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};
