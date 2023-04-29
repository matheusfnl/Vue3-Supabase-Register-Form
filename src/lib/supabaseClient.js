import { createClient } from '@supabase/supabase-js'

const {
  VUE_APP_DB_SECRET_KEY,
  VUE_APP_DB_LINK,
} = process.env

export const supabase = createClient(VUE_APP_DB_LINK, VUE_APP_DB_SECRET_KEY)