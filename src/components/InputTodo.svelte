<script>
  import MdiPlaylistEdit from '@/MdiPlaylistEdit.svelte'
  import MdiCloseCircle from '@/MdiCloseCircle.svelte'
  import MdiSend from '@/MdiSend.svelte'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  import { fade } from 'svelte/transition'

  let text = ''

  const onEnter = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' || !text) return
    dispatchEnter()
  }

  const dispatchEnter = (): void => {
    dispatch('enter', text)
    text = ''
  }

  const onClick = () => {
    if (!text) return
    dispatchEnter()
  }
</script>

<div class="input-box">
  <div class="box">

    <MdiPlaylistEdit />
    <input placeholder="Enter todo" bind:value="{text}" type="text" on:keydown="{onEnter}" />
    <div style="width: 24px; height: 24px;">
      {#if text}
        <template transition:fade>
          <MdiCloseCircle on:click="{onClick}" />
        </template>
      {/if}
    </div>

  </div>
  <button style="display: flex;" disabled="{!text}" type="button" on:click="{onClick}">
    <MdiSend />
  </button>

</div>

<style>
  input {
    margin: 0;
    font-size: 1.2rem;
    border: none;
    border-radius: 0;
    outline: none;

    &:focus {
      outline: none;
    }
  }

  .box {
    display: inline-flex;
    align-items: center;
    padding: 10px;
  }

  .input-box {
    display: inline-flex;
    border: 1px solid black;
    border-radius: 5px;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 1px 1px 1px;
    }
  }

  button {
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    transition: all 0.3s;

    &:hover {
      cursor: pointer;
      background-color: blue;
    }

    &:active {
      background-color: red;
    }

    &:disabled {
      color: black;
      cursor: not-allowed;
      background-color: grey;
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
