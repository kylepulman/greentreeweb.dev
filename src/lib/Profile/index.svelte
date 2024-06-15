<script lang="ts">
	import { type ProfileOptions, type ProfileShape } from '.';

	export let content: ProfileShape;
	export let options: ProfileOptions;
</script>

<section
	class="page flex flex-col items-center gap-8 md:flex-row {options.reversed
		? 'md:flex-row-reverse'
		: 'md:flex-row'}"
>
	<article class="flex-1 space-y-4">
		{#if content.heading}
			<h2 class="h1">{content.heading}</h2>
		{/if}
		{#if content.detail}
			<p>{content.detail}</p>
		{/if}
		{#if content.callsToAction}
			<nav class="flex flex-wrap items-center gap-4">
				{#each content.callsToAction as location}
					<a
						class="variant-filled btn [&:nth-of-type(1)]:variant-filled-primary [&:nth-of-type(2)]:variant-filled-secondary [&:nth-of-type(3)]:variant-filled-tertiary"
						href={location.action}>{location.label}</a
					>
				{/each}
			</nav>
		{/if}
	</article>
	<figure class="flex flex-col items-center space-y-2 text-center">
		<img
			class="rounded-full"
			src={content.visual.source}
			alt={content.visual.alternativeText}
			width={content.visual.width}
			height={content.visual.height}
		/>
		<figcaption>
			<h3 class="h4">{content.figcaption.heading}</h3>
			<p>{content.figcaption.detail}</p>
		</figcaption>
	</figure>
</section>
