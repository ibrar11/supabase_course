import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth.tsx";
import TaskManager from "./components/task-manager.tsx";
import supabase from "./supabase-client.ts";
import type { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    console.log(currentSession);
    setSession(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {session ? (
        <>
          <button type="button" onClick={logout}> Log Out</button>
          <TaskManager session={session} />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;