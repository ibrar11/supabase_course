import "@supabase/functions-js/edge-runtime.d.ts";
import { serve } from "std/http/server.ts";

serve((_req) => {
  return new Response("Hello from Supabase Edge Functions!", {
    headers: { "Content-Type": "text/plain" },
  });
});
