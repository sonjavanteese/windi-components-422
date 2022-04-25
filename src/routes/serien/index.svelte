<script>
  import Page from "$lib/windi/Page.svelte";
  import PopModal from "$lib/windi/PopModal.svelte";
  import { fetch_south_park, _south_park, pageData } from "$lib/data";
  import SpFetcher from "$lib/data/comp/SpFetcher.svelte";
  const pid = 1;
  let { titel, sub } = pageData[pid];
  let open = false;
  let dataDetail = "";
  const getData = (id) => {
    fetch_south_park(id).then((data) => {
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

<Page>
  <header class="px-4 py-4 text-center">
    <hgroup class="space-y-4 py-4">
      <h2>{titel}</h2>
      <h4>{sub}</h4>
      <p class="space-x-2">
        <a
          href="/serien"
          on:click|preventDefault={() => _south_park.fetchAll()}
          class="btn shadow">Reload</a
        >
        <a href="/serien/editor" class="btn shadow">Edit List</a>
      </p>
    </hgroup>
  </header>
  <hr />
  <section class="container mx-auto px-2">
    <div class="py-4">
      <SpFetcher refresh={false} let:payload>
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
            <li class="text-center">Press The Reload Button</li>
          {/each}
        </ul>
      </SpFetcher>
    </div>
  </section>
</Page>
