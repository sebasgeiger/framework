<script>
  export let data;
</script>

<div class="container">
  <article>
    <h1>Blog Posts</h1>
    <p>Welcome to the Posts page of my blog, dedicated to all things feline! Here, you'll find a chronological listing of all my blog posts, organized by date. From the newest to the oldest, you'll be able to browse through a comprehensive collection of articles on various topics related to cats, both wild and domestic.</p>
    <p>The content of my posts varies widely, ranging from practical tips on cat care to fascinating discussions on the behavior and biology of wild cats. Some posts focus on specific breeds of domestic cats, while others explore the habits and habitats of big cats like lions, tigers, and leopards. I also share personal stories and experiences with cats, providing a unique perspective on the joys and challenges of living with these amazing creatures.</p>  
    <p>Overall, my blog posts are designed to inform, entertain, and educate readers about all things feline. Whether you're a seasoned cat lover or simply curious about these fascinating animals, you're sure to find something of interest in my blog posts. So take a look around, and don't forget to check back often for new updates and insights into the wonderful world of cats!</p>
  </article>
  <aside>
    <h2>All Posts</h2>
    <nav class="sidebar">
      {#each data.summaries as {slug, title}}
        <a href="/posts/{slug}">{title}</a>
      {/each}
    </nav>
  </aside>
</div>

<style>
  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
  }
  nav a {
    padding: 1rem 0;
  }
  h2 {
    width: 100%;
    text-align: left;
  }
</style>