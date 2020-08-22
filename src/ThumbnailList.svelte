<script lang="ts">
  import { getThumbnailInfos } from './youtube';
  import ThumbnailImage from './ThumbnailImage.svelte';

  export let id;

  const infos = getThumbnailInfos(id);
</script>

<style>
  .url {
    -moz-user-select: all;
    -webkit-user-select: all;
    -ms-user-select: all;
    user-select: all;
  }
</style>

<section>
  {#each infos as { name, url, width, height }}
    <h2>{name} ({width} x {height})</h2>
    <p class="url">{url}</p>
    <ThumbnailImage {name} {url} {width} {height} />
  {/each}

</section>
