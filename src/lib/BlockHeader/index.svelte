<script lang="ts">
	import { content } from '.';
</script>

<div class="page my-8">
	<article class="mx-auto flex max-w-prose flex-col items-center space-y-4 px-4 text-center">
		<h2 class="h2 flex gap-2">{content.heading}</h2>
		<img src={content.visual.source} alt={content.visual.alternativeText} width="36" height="36" />
		<p>{content.detail}</p>
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
	</article>
</div>
