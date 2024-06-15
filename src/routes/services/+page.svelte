<script lang="ts">
	import { Content } from '$lib/Content';
	import { Tiers, tierContent } from '$lib/Tiers';
	import { Visual } from '$lib/Visual';

	export let data;
</script>

<svelte:head>
	<title>Our Services &bull; Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="hero">
	<Content content={data.one.content} />
	<Visual content={data.one.visual} />
</section>
<section class="hero">
	<Visual content={data.two.visual} />
	<Content content={data.two.content} classes="flex-2" />
</section>
<section class="hero">
	<Content content={data.three.content} classes="flex-2" />
	<Visual content={data.three.visual} />
</section>
<section class="hero">
	<Visual content={data.four.visual} classes="flex-2" />
	<Content content={data.four.content} />
</section>
<Tiers content={tierContent} />
