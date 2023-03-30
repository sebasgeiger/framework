<script>
    export let data;
    const {nhlteams} = data;
    const nhldiv = nhlteams.filter(team => team.division.id === 18)   
    </script>

<article>
    {#each nhldiv as { name, firstYearOfPlay, venue}}  
        <div class="card">
            <h1>{name}</h1>
                <p><b>First Year:</b> {firstYearOfPlay}</p>
                <p><b>Arena:</b> {venue.name}</p>
                <p><b>City:</b> {venue.city}</p>
            </div>
    {/each}
</article>

<!-- <script>
    export let data;
  </script>
  
  <h1>{data.post.title}</h1>
  <p>Article #{data.post.slug}</p>
  <p>{data.post.content}</p> -->

<style>
    article {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
    .card {
        border: 2px solid #e7e7e7;
        border-radius: 4px;
        border-color: lightblue;
        padding: .5rem;
        text-align: center;
    }
</style> 
