CREATE TABLE public.profiles (
    id uuid not null DEFAULT auth.uid (),
    created_at timestamp with time zone not null default now(),
    constraint profiles_pkey primary key (id),
    constraint profiles_id_fkey foreign KEY (id) references auth.users (id) on DELETE CASCADE
) TABLESPACE pg_default;
