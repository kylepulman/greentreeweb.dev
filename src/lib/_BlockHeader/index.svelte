<script lang="ts">
	import { Icon } from '$lib/_Icon';
	import type { BlockHeaderShape } from '.';

	export let content: BlockHeaderShape;
</script>

{#if content}
	<header class="my-8 flex flex-col items-center space-y-4 text-center sm:my-16 2xl:my-32">
		{#if content.heading}
			<h2 class="h2">{content.heading}</h2>
		{/if}
		{#if content.icon}
			<Icon source={content.icon} />
		{/if}
		{#if content.detail}
			<div class="max-w-prose">
				{#each content.detail as p}
					<p>{p}</p>
				{/each}
			</div>
		{/if}
	</header>
{/if}
