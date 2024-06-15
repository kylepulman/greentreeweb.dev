<script lang="ts">
	import type { HeroOptions, VisualShape } from './';

	export let options: HeroOptions;
	export let value: VisualShape;
</script>

<figure class=" {options.layout?.figure?.flex ?? 'flex-1'}">
	<img class="h-full w-full object-cover" src={value.source} alt={value.alternativeText} width={value.width} height={value.height} />
</figure>
