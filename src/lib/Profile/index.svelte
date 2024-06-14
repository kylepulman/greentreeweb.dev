<script lang="ts">
	import { type ProfileShape } from '.';

	export let content: ProfileShape;
</script>

<div class="page my-8 px-4">
	<figure class="flex flex-col items-center space-y-2 text-center">
		<img
			class="rounded-full"
			src={content.visual.source}
			alt={content.visual.alternativeText}
			width={content.visual.width}
			height={content.visual.height}
		/>
		<figcaption>
			<h3 class="h4">{content.figcaption.heading}</h3>
			<p>{content.figcaption.detail}</p>
		</figcaption>
	</figure>
</div>
