<script lang="ts">
	import { content } from '.';
</script>

<div class="page my-8 flex flex-col items-center gap-4 px-4 lg:flex-row lg:items-stretch">
	{#each content as card}
		<article class="card mx-auto flex max-w-prose flex-col items-center space-y-4 p-4 text-center">
			<h2 class="h3 flex gap-2">{card.heading}</h2>
			<img src={card.visual.source} alt={card.visual.alternativeText} width="36" height="36" />
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
