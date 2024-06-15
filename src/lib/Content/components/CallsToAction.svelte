<script lang="ts">
	import type { CallsToAction } from '$lib/types';

	export let value: CallsToAction;
</script>

<nav class="flex flex-wrap items-center gap-4">
	{#each value as location}
		<a class="variant-filled btn [&:nth-of-type(1)]:variant-filled-primary [&:nth-of-type(2)]:variant-filled-secondary [&:nth-of-type(3)]:variant-filled-tertiary" href={location.action}>{location.label}</a>
	{/each}
</nav>
