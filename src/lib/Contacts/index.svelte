<script lang="ts">
	import type { Contact } from '.';

	export let content: Contact[];
</script>

<div class="page flex flex-wrap items-start gap-4">
	{#each content as contact}
		<a class="card flex gap-4 p-4" href={contact.action}>
			<img
				src={contact.visual.source}
				alt={contact.visual.alternativeText}
				width={contact.visual.width}
				height={contact.visual.height}
			/>
			<div>
				<h3 class="h3">{contact.heading}</h3>
				<p>{contact.detail}</p>
			</div>
		</a>
	{/each}
</div>
