import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const url = (import.meta.env.VITE_SUPABASE_URL ?? import.meta.env.NEXT_PUBLIC_SUPABASE_URL) as string | undefined
const anonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) as string | undefined

let supabaseInstance: SupabaseClient | null = null
if (url && anonKey) {
  try {
    supabaseInstance = createClient(url, anonKey)
  } catch (e) {
    console.error('Supabase client init failed:', e)
  }
} else {
  console.warn('Missing Supabase env. Set VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY, or NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY.')
}

export const supabase = supabaseInstance
