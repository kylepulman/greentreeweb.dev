<script lang="ts">
	import { Icon } from '$lib/_Icon';
	import type { ChipsShape } from '.';

	export let content: ChipsShape;
</script>

<div class="flex flex-1 flex-wrap justify-center gap-2 lg:gap-4">
	{#each content as chip}
		<a href={chip.action} class="variant-soft chip flex-1 p-4 hover:variant-filled">
			<span>
				{#if chip.icon?.source && !chip.icon?.source.includes('.')}
					{#await import(`../Icons/${chip.icon.source}.svelte`) then icon}
						<svelte:component this={icon.default} />
					{/await}
				{:else}
					<Icon source={chip.icon?.source} />
				{/if}
			</span>
			<span class="text-base font-medium">
				{chip.label}
			</span>
		</a>
	{/each}
</div>
