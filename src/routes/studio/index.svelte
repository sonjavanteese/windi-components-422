<script>
  import { fetchClass } from "$lib/data";
  import ClassicFetcher from "$lib/data/comp/ClassicFetcher.svelte";
  import PopModal from "$lib/windi/PopModal.svelte";
  let open = false;
  let dataDetail = '';
  const getData = (id) => {
    fetchClass(id).then((data) => {
      dataDetail = data;
      open = true;
    });
  };
  
</script>


<PopModal bind:open>
  <div class="w-full text-left">
    <pre class="overflow-auto">{JSON.stringify(dataDetail, null, 2)}</pre>
  </div>
</PopModal>

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
      <ul class="list-none divide-y">
        {#each payload as data}
          <li 
          class="flex items-center justify-between py-1 px-2 text-lg cursor-pointer"
            on:click={() => {
              getData(data.id);
            }}
          >
            <span class="font-semibold">
              {data.titel}
            </span>
            <span>
              {data.id}
              
            </span>
          </li>
        {:else}
          <li>Press The Reload Button</li>
        {/each}
      </ul>
    </ClassicFetcher>
  </div>
</section>


