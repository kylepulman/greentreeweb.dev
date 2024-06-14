<script lang="ts">
	import type { PitchShape } from '.';

	export let content: PitchShape;
</script>

<div
	class="page my-8 flex items-center gap-4 px-4 {content.reversed
		? 'lg:flex-row-reverse'
		: 'lg:flex-row'}"
>
	<figure>
		<img src={content.visual.source} alt={content.visual.alternativeText} />
	</figure>
	<article class="mx-auto flex max-w-prose flex-col space-y-4">
		<h2 class="h2 flex gap-2">{content.heading}</h2>
		<p class="whitespace-pre-wrap">{content.detail}</p>
		<ul class="list space-y-2">
			{#each content.points as point}
				<li>
					<span><img src="/favicon.svg" alt="A list item." width="16" height="16" /></span>
					<span>
						<p class="flex-auto font-bold">{point.heading}</p>
						{#if point.detail}
							<p>{point.detail}</p>
						{/if}
					</span>
				</li>
			{/each}
		</ul>
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
</div>
