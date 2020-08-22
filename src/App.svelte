<script lang="ts">
  import { onMount } from 'svelte';
  import { extractId } from './youtube';
  import ThumbnailList from './ThumbnailList.svelte';

  let url = '';
  let id: string | null = '';

  onMount(() => {});

  $: {
    console.log(url);
    id = extractId(url);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: 100;
  }

  .field {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .field > label {
    font-size: 2rem;
    display: none;
  }

  .field > input {
    font-size: 1.2rem;
    border: none;
    border-bottom: 1px solid #aaa;
    width: 100%;
    max-width: 500px;
  }

  .field > input:focus {
    outline: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    .field > label {
      display: initial;
    }
  }
</style>

<main>
  <h1>YouTube Thumbnail</h1>

  <div class="field">
    <label for="url">URL</label>
    <input id="url" name="url" inputmode="url" bind:value={url} placeholder="" autofocus />
  </div>

  {#if id !== null}
    <ThumbnailList {id} />
  {/if}

</main>
