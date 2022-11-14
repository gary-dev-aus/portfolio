<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/header/header.svelte";
  import Footer from "$lib/components/footer/footer.svelte";
</script>

<Header />
<div class="flex flex-col min-h-screen">
  <slot />
</div>
<Footer />
