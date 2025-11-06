import "@supabase/functions-js/edge-runtime.d.ts";
import { serve } from "std/http/server.ts";
import supabase from "../_shared/supabaseClient.ts";
import { corsHeaders } from "../_shared/cors.ts";


const getTasks = async (_req: Request) => {
  try {
    const res = await supabase      
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: true });
    if (res?.error) {
      throw new Error(JSON.stringify(res.error))
    }
    console.log("res.datares.datares.data",res.data)
    return new Response(
      JSON.stringify(res.data),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (err) {
    console.log("error fetching tasks", err)
    return new Response(
      JSON.stringify(err),
      {
        headers: { ...corsHeaders },
      }
    )
  }
}

serve(getTasks)
