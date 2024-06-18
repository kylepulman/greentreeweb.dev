<script lang="ts">
	import { Icon } from '$lib/_Icon';
	import type { ChipsShape } from '.';

	export let content: ChipsShape;
</script>

<div class="flex flex-1 flex-wrap justify-center gap-2 lg:gap-4">
	{#each content as chip}
		<a href={chip.action} class="variant-soft chip flex-1 p-4 hover:variant-filled">
			<span>
				<Icon source={chip.icon} />
			</span>
			<span class="text-base font-medium">
				{chip.label}
			</span>
		</a>
	{/each}
</div>
