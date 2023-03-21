<script>
    export let data;
    const {nhlteams} = data;
</script>

<article>
    {#each nhlteams as { teams,id,name,venue,firstYearOfPlay,division}}
    <h1>{name}</h1>
    <p>{venue},{firstYearOfPlay},{division}</p>
    {/each}
</article>

<style>
    article{
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em; 
    }
</style>