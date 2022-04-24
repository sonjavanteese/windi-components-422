<script>
  import { user, fetchClass } from "$lib/data";
  import Auth from "$lib/windi/Auth.svelte";
  import ClassicFetcher from "$lib/data/comp/ClassicFetcher.svelte";

  const getData = (id) => {
    fetchClass(id).then((data) => {
      console.log("getData", data);
    });
  };
</script>

<section class="container mx-auto px-2 py-4">
  <header>
    <hgroup>
      <h2>Startseite</h2>
      <h4>
        {#if $user}
          Signed In
        {:else}
          Signed Out
        {/if}
      </h4>
      <p class="py-2">
        <a href="/studio" class="btn shadow">Studio</a>
      </p>
    </hgroup>
  </header>

  <div class="py-4">
    <Auth popup class="shadow bg-white rounded-lg w-full">
      
    </Auth>
  </div>
</section>
