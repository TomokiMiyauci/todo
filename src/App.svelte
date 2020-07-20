<script lang="typescript">
  import { mdiPlaylistEdit } from '@mdi/js'
  import MdiPlaylistEdit from './components/MdiPlaylistEdit.svelte'
  import MdiCloseCircle from './components/MdiCloseCircle.svelte'
  import MdiSend from './components/MdiSend.svelte'
  import { fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  const NA = 1

  let text = ''
  let list = [{ id: 0, text: 'hello', done: false }]

  $: todoList = list.filter((l) => !l.done)
  $: doneList = list.filter((l) => l.done)

  const onEnter = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' || !text) return
    add(text)
  }

  const add = (t: string): void => {
    if (!t) return
    list = [...list, { id: list.length, text: t, done: false }]
    text = ''
  }

  const onClick = () => {
    alert()
  }

  const check = (index: number, isCheck: boolean = true) => {
    list[index].done = isCheck
  }
</script>

<main>
  <h1>Hello {NA}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <div class="input-box">
    <div class="box">

      <MdiPlaylistEdit />
      <input placeholder="Enter todo" bind:value="{text}" type="text" on:keydown="{onEnter}" />
      <div style="width: 24px; height: 24px;">
        {#if text}
          <div transition:fade>
            <MdiCloseCircle on:click="{onClick}" />
          </div>
        {/if}
      </div>

    </div>
    <button disabled="{!text}" type="button" on:click="{add(text)}">
      <MdiSend />
      Send
    </button>

  </div>
  <div class="container">
    <h2>TODO</h2>
    <div class="child">
      {#if !todoList.length}
        <div>No</div>
      {/if}
      {#each todoList as li (li.id)}
        <div animate:flip on:click="{check(li.id)}" class="list">{li.text}</div>
      {/each}
    </div>
    <h2>DONE</h2>
    <div class="child">
      {#each doneList as li (li.id)}
        <p class="list" animate:flip on:click="{check(li.id, false)}">{li.text}</p>
      {/each}
    </div>
  </div>

</main>

<style lang="scss">
  main {
    max-width: 240px;
    padding: 1em;
    margin: 0 auto;
    text-align: center;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
    color: #ff3e00;
    text-transform: uppercase;
  }

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

  .list {
    display: flex;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .box {
    display: inline-flex;
    padding: 10px;
  }

  .input-box {
    display: inline-flex;
    border: 1px solid black;
    border-radius: 5px;
  }

  .container {
    display: flex;
  }

  .child {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 12px;
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
