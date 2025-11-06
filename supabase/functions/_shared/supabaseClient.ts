import { createClient } from "@supabase/supabase-js";

const _SUPABASE_URL = Deno.env.get("_SUPABASE_URL") as string;
const _SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("_SUPABASE_SERVICE_KEY") as string;

const supabase = createClient(_SUPABASE_URL, _SUPABASE_SERVICE_ROLE_KEY);

export default supabase;