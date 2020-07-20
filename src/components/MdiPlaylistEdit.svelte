<script lang="typescript">
  import SvgSlot from './SvgSlot.svelte'
  import { mdiPlaylistEdit } from '@mdi/js'
</script>

<SvgSlot>
  <path d="{mdiPlaylistEdit}"></path>
</SvgSlot>

<style lang="scss">
  path {
    &:hover {
      background-color: blue;
    }
  }
</style>
