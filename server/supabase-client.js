import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bnxydowhuhdusbnxtria.supabase.co";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
