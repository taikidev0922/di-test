import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const supabase = createClient(
    runtimeConfig.public.supabaseUrl as string,
    runtimeConfig.public.supabaseAnonKey as string
  );
  return {
    provide: {
      supabase,
    },
  };
});
