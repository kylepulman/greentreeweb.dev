<script lang="ts">
	import type { VisualShape } from '.';

	export let classes: string = '';
	export let content: VisualShape | undefined;
</script>

{#if content}
	<figure class="{classes} flex-1">
		<img class="h-full w-full object-cover" src={content.source} alt={content.alternativeText} width={content.width} height={content.height} />
	</figure>
{/if}
