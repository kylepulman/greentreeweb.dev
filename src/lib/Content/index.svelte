<script lang="ts">
	import type { ContentShape } from '.';

	export let classes: string = '';
	export let content: Map<keyof ContentShape, ContentShape[keyof ContentShape]> | undefined;
</script>

{#if content}
	<article class="{classes} flex-1 space-y-4 self-center">
		{#each content.entries() as [key, value]}
			{#if value}
				{#await import(`./components/${key[0].toUpperCase() + key.slice(1)}.svelte`) then module}
					<svelte:component this={module.default} {value}></svelte:component>
				{/await}
			{/if}
		{/each}
	</article>
{/if}
