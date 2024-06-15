<script lang="ts">
	import type { BlockHeaderShape } from '.';

	export let content: BlockHeaderShape;
</script>

<header>
	<article class="mx-auto flex max-w-prose flex-col items-center space-y-4 text-center">
		<h2 class="h2 flex gap-2">{content.heading}</h2>
		{#if content.visual}
			<img src={content.visual.source} alt={content.visual.alternativeText} width="36" height="36" />
		{/if}
		{#if content.detail}
			<p>{content.detail}</p>
		{/if}
		{#if content.callsToAction}
			<nav class="flex flex-wrap items-center gap-4">
				{#each content.callsToAction as location}
					<a
						class="variant-filled
							 btn
							 first-of-type:variant-filled-primary
							 [&:nth-of-type(2)]:variant-filled-secondary
							 [&:nth-of-type(3)]:variant-filled-tertiary"
						href={location.action}>{location.label}</a
					>
				{/each}
			</nav>
		{/if}
	</article>
</header>
