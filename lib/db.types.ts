import { Database } from "./types/supabase";

type Tables = Database['public']['Tables']
export type Video = Tables['videos']['Row'];