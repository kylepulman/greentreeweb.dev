<script lang="ts">
	import type { Tier } from '.';

	export let content: Tier[];
</script>

<div
	class="page my-8 flex flex-col items-center justify-center gap-4 px-4 lg:flex-row lg:items-stretch"
>
	{#each content as card}
		<article
			class="card variant-ghost-primary flex w-full max-w-80 flex-col items-center justify-between space-y-4 p-4 text-center"
		>
			<h3>{card.type}</h3>
			{#if card.visual}
				<img
					src={card.visual.source}
					alt={card.visual.alternativeText}
					width={card.visual.width}
					height={card.visual.height}
				/>
			{/if}
			<h2 class="h1 flex gap-2">
				{card.heading}
			</h2>
			{#if card.detail}
				<p>{card.detail}</p>
			{/if}
			<ul class="list w-full text-left">
				{#each card.points as point}
					<li>
						<span><img src="/favicon.svg" alt="A list item." width="16" height="16" /></span>
						<span class="flex-auto">{point.heading}</span>
					</li>
				{/each}
			</ul>
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
