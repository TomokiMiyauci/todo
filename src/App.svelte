<script>
  import InputTodo from '@/InputTodo.svelte'
  import Candban from '@/Canban.svelte'

  type todo = {
    id: number
    text: string
    done: boolean
  }

  let list: todo[] = []
  const onEnter = ({ detail }: CustomEvent<string>) => {
    list = [...list, { text: detail, done: false, id: list.length }]
  }
</script>

<main>
  <h1>Tododa!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <InputTodo on:enter="{onEnter}" />

  <Candban bind:list />

</main>

<style>
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
