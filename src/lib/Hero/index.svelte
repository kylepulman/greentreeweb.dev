<script lang="ts">
	import { content } from '.';
</script>

<div class="page my-8 flex flex-col justify-between gap-4 px-4 lg:flex-row lg:items-center">
	<article class="max-w-prose space-y-4">
		<h2 class="h1 flex gap-2">{content.heading}</h2>
		<p>{content.detail}</p>
		<nav class="flex flex-wrap items-center gap-4">
			{#each content.callsToAction as location}
				<a class="variant-filled-primary btn" href={location.action}>{location.label}</a>
			{/each}
		</nav>
	</article>
	<figure>
		<img src={content.visual.source} alt={content.visual.alternativeText} />
	</figure>
</div>
