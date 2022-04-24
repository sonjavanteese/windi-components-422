<script>
  import { user, fetchClass } from "$lib/data";
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
      <h2>Blackburn</h2>
      <h4>Classic Collection</h4>
      <p class="py-2">
        <a href="/" class="btn shadow">Start</a>
      </p>
    </hgroup>
  </header>

  <div class="py-4">
    <ClassicFetcher let:payload>
      <ul>
        {#each payload as data}
          <li
            class="cursor-pointer"
            on:click={() => {
              getData(data.id);
            }}
          >
            {data.titel}
          </li>
        {:else}
          <li>Press The Reload Button</li>
        {/each}
      </ul>
    </ClassicFetcher>
  </div>
</section>
