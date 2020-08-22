<script lang="ts">
  export let url: string;
  export let name: string;
  export let width: number;
  export let height: number;

  let imageWidth = 400;
  $: imageHeight = imageWidth * (height / width);
</script>

<img src={url} alt={name} width={imageWidth} height={imageHeight} loading="lazy" />
