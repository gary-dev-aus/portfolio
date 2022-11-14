<script>
  import { projects } from "$lib/stores/projects";
  console.log($projects);
</script>

<h1>Projects</h1>
<ul class="space-y-2">
  {#each $projects as project (project.id)}
    <li>
      <h2>
        {project.name}
      </h2>
      <div>{project.description}</div>
    </li>
  {/each}
</ul>
