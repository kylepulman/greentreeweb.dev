<script lang="ts">
	import { content } from '.';
</script>

<div class="page my-8 flex gap-4 px-4">
	<figure>
		<img src={content.visual.source} alt={content.visual.alternativeText} />
	</figure>
	<article class="mx-auto flex max-w-prose flex-col space-y-4">
		<h2 class="h2 flex gap-2">{content.heading}</h2>
		<p class="whitespace-pre-wrap">{content.detail}</p>
		<ul class="list">
			{#each content.points as point}
				<li>
					<span><img src="/favicon.svg" alt="A list item." width="16" height="16" /></span><span
						class="flex-auto">{point.heading}</span
					>
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
