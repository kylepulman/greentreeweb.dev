<script lang="ts">
	import type { List } from './';

	export let value: List;
</script>

<ul class="list space-y-2">
	{#each value as item}
		<li>
			<span><img src="/favicon.svg" alt="bullet" width="32" height="32" /></span>
			<span>
				{#if item.heading}
					<p class="font-bold">{item.heading}</p>
				{/if}
				{#if item.detail}
					<p>{item.detail}</p>
				{/if}
			</span>
		</li>
	{/each}
</ul>
