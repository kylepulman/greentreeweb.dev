<script lang="ts">
	import { Cards, cardDefaultContent } from '$lib/Cards';
</script>

<svelte:head>
	<title>Our Portfolio &bull; Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<Cards content={{ articles: cardDefaultContent.articles }} />
