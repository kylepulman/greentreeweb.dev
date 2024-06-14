<script lang="ts">
	import { Hero } from '$lib/Hero';
	import { BlockHeader } from '$lib/BlockHeader';
	import { Cards } from '$lib/Cards';
</script>

<svelte:head>
	<title>Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="page">
	<Hero />
	<BlockHeader />
	<Cards />
</section>
