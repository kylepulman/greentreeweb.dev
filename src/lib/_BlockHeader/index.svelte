<script lang="ts">
	import type { BlockHeaderShape } from '.';

	export let content: BlockHeaderShape;
</script>

{#if content}
	<header class="flex flex-col items-center space-y-4 text-center">
		{#if content.image}
			<img src={content.image.source} alt={content.image.alternativeText} width={content.image.width} height={content.image.height} />
		{/if}
		<h2 class="h2">{content.heading}</h2>
		{#if content.detail}
			<div class="max-w-prose">
				{#each content.detail as p}
					<p>{p}</p>
				{/each}
			</div>
		{/if}
	</header>
{/if}
