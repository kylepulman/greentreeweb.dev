<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { content } from '.';
</script>

<header class="page my-8 flex flex-col justify-between gap-4 px-4 lg:flex-row lg:items-center">
	<h1 class="flex gap-2">
		<img src="/favicon.svg" alt="Greentree Web Development logo" width="48" height="48" />
		<span class="h2 whitespace-pre-wrap">{content.title}</span>
	</h1>
	<nav class="flex flex-wrap items-center gap-4">
		{#each content.navigation as location}
			<a href={location.action}>{location.label}</a>
		{/each}
	</nav>
	<LightSwitch />
</header>
