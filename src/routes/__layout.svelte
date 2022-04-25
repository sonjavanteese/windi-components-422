<script>
  import "virtual:windi.css";
  import "../style.css";
  import { supabase, user, _app } from "$lib/data";
  import Toasts from "$lib/toast/Toasts.svelte";
  import Sidebar from "$lib/windi/Sidebar.svelte";
  import { browser } from "$app/env";
  // import { goto } from '$app/navigation'
  user.set(supabase.auth.user());
  if (browser) {
    import("virtual:windi-devtools");
  }
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      user.set(session.user);
    } else {
      user.set(null);
    }
  });
  let open;
</script>

<Toasts />
<Sidebar bind:open />


<main id="main">
  {#if browser}
    <slot />
  {/if}
</main>

<style>

  /* @import url("https://css.gg/notes.css");
  @import url("https://css.gg/menu-grid-o.css");
  @import url("https://css.gg/user.css");
  @import url("https://css.gg/user-add.css");
  @import url("https://css.gg/arrow-left.css"); */
</style>
