<script lang="ts">
	import type { Card } from '.';

	export let content: Card[];
</script>

<div class="page flex flex-col items-center gap-4 lg:flex-row lg:items-stretch">
	{#each content as card}
		<article
			class="card variant-ghost-surface mx-auto flex max-w-prose flex-1 flex-col items-center justify-between space-y-4 p-4 text-center"
		>
			<img
				src={card.visual.source}
				alt={card.visual.alternativeText}
				width={card.visual.width}
				height={card.visual.height}
			/>
			<h2 class="h3 flex gap-2">
				{card.heading}
			</h2>
			<p>{card.detail}</p>
			{#if card.callsToAction}
				<nav class="flex flex-wrap items-center gap-4">
					{#each card.callsToAction as location}
						<a
							class="variant-filled btn first-of-type:variant-filled-primary [&:nth-of-type(2)]:variant-filled-secondary [&:nth-of-type(3)]:variant-filled-tertiary"
							href={location.action}>{location.label}</a
						>
					{/each}
				</nav>
			{/if}
		</article>
	{/each}
</div>
