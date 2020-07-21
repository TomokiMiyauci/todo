<script>
  let width = 24
</script>

<svg {width} height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <slot />
</svg>

<style>
  svg {
    display: flex;
    flex: 1 0 auto;
    align-items: center;
  }
</style>
