import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

let supabaseInstance: SupabaseClient | null = null
if (url && anonKey) {
  try {
    supabaseInstance = createClient(url, anonKey)
  } catch (e) {
    console.error('Supabase client init failed:', e)
  }
} else {
  console.warn('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Add them in .env and in Vercel (Environment Variables).')
}

export const supabase = supabaseInstance
