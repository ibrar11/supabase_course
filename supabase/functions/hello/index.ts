import "@supabase/functions-js/edge-runtime.d.ts";
import { serve } from "std/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

serve((_req) => {
  return new Response("Hello from Supabase Edge Functions!", {
    headers: { ...corsHeaders, "Content-Type": "text/plain" },
  });
});
