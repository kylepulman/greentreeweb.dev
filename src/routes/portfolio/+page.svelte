<script lang="ts">
	import { Cards, portfolioContent } from '$lib/Cards';
</script>

<svelte:head>
	<title>Our Portfolio &bull; Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="page">
	<Cards content={portfolioContent} />
</section>
