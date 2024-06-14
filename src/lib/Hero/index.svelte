<script lang="ts">
	import type { HeroShape } from '.';

	export let content: HeroShape;
</script>

<div
	class={`page my-8 flex flex-col justify-between gap-4 px-4 lg:items-center ${content.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
>
	<article class="max-w-prose space-y-4">
		{#if content.subheading}
			<h3 class="text-primary-300">{content.subheading}</h3>
		{/if}
		<h2 class="h1 flex gap-2">{content.heading}</h2>
		<p class="whitespace-pre-wrap">{content.detail}</p>
		{#if content.callsToAction}
			<nav class="flex flex-wrap items-center gap-4">
				{#each content.callsToAction as location}
					<a class="variant-filled-primary btn" href={location.action}>{location.label}</a>
				{/each}
			</nav>
		{/if}
	</article>
	<figure>
		<img
			src={content.visual.source}
			alt={content.visual.alternativeText}
			width={content.visual.width}
			height={content.visual.height}
		/>
	</figure>
</div>
