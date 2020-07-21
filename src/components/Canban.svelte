<script>
  import { fade } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import { crossfade } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  import MdiDelete from '@/MdiDelete.svelte'

  type todo = {
    id: number
    text: string
    done: boolean
  }
  export let list: todo[] = []

  $: todoList = list.filter((l) => !l.done)
  $: doneList = list.filter((l) => l.done)

  const check = (index: number, isCheck: boolean = true) => {
    list[index].done = isCheck
  }

  const [send, receive] = crossfade({
    fallback: (node) => {
      const style = getComputedStyle(node)
      const transform = style.transform === 'none' ? '' : style.transform
      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
        `,
      }
    },
  })
</script>

<div class="container">
  <div class="child">
    <h2 style="padding: 5px; border-bottom: 1px solid grey;">
      <span>TODO</span>
    </h2>
    {#if !todoList.length}
      <div class="box-placeholder" in:fade>NO Todo</div>
    {/if}
    {#each todoList as li (li.id)}
      <div
        in:receive="{{ key: li.id }}"
        out:send="{{ key: li.id }}"
        animate:flip
        on:click="{check(li.id)}"
        class="list"
      >
        {li.text}
        <button class="circle" type="button">
          <MdiDelete />
        </button>
      </div>
    {/each}
  </div>
  <div class="child">
    <h2>DONE</h2>
    {#each doneList as li (li.id)}
      <p
        class="list"
        in:receive="{{ key: li.id }}"
        out:send="{{ key: li.id }}"
        animate:flip
        on:click="{check(li.id, false)}"
      >
        {li.text}
      </p>
    {/each}
  </div>
</div>

<style>
  .list {
    display: flex;
    align-items: center;
    min-height: 20px;
    padding: 5px;
    margin: 10px;
    font-size: 1.2rem;
    background-color: rgba(185, 41, 41, 0.3);
    border: 1px solid grey;
    border-radius: 4px;

    &:first-child {
      background-color: red;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:hover {
      cursor: pointer;
      background-color: grey;
    }
  }

  .container {
    display: flex;
    margin: 0 40px;
    margin-top: 20px;
    background-color: rgba(209, 200, 200, 0.664);
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 1px 1px 1px;
    transition: all 1s;

    &:hover {
      transform: scale(1.01);
    }
  }

  .child {
    flex: 1 1;
    padding: 12px;

    &:first-child {
      border-right: 1px solid black;
    }
  }

  .box-placeholder {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    min-height: 300px;
    font-size: 2rem;
  }

  .circle {
    border-radius: 50%;
  }

  button {
    padding: 10px;
    font-size: 1.2rem;
    border: none;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    transition: all 0.3s;
  }
</style>
