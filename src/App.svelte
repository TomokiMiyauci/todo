<script lang="typescript">
  const NA = 1

  const a = (): HTMLDivElement => {
    return document.createElement('div')
  }


  let text = ''
  let list = [{
    text: 'hello',
    done: false
  }]

  const onEnter = (e: KeyboardEvent):void => {
    if(e.key !== 'Enter' || !text) return
    add(text)
  }

  const add = (t: string):void => {
    if(!t) return
    list = [...list, {text: t, done: false}]
    text = ''
  }


</script>

<main>
  <h1>Hello {NA}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <input placeholder="Enter todo" bind:value={text} type="text" on:keydown={onEnter} /><button disabled={!text} type="button" on:click={add(text)}>Send</button>
  <h2>TODO</h2>
  {#each list as li,index (index)}
<p>{li.text}</p>
<p>{li.done}</p>
{/each}

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
    border-radius: 0;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &:focus {
      outline: none;
    }
  }

  button {
    margin: 0;
    border-radius: 0;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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
