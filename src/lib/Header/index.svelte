<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import type { HeaderShape } from '.';

	export let content: HeaderShape;
</script>

<header class="px-4" class:sub-page={content.pageTitle}>
	<div class="page flex flex-col items-center gap-4 py-8 lg:flex-row">
		<h1 class="flex flex-1 gap-2">
			<img src="/favicon.svg" alt="Greentree Web Development logo" width="48" height="48" />
			<span class="h2 whitespace-pre-wrap">{content.title}</span>
		</h1>
		<nav class="flex flex-wrap items-center justify-center gap-4">
			{#each content.navigation as location}
				<a href={location.action}>{location.label}</a>
			{/each}
		</nav>
		<LightSwitch />
	</div>
	{#if content.pageTitle}
		<div class="flex h-64 items-center justify-center">
			<h1 class="h1">{content.pageTitle}</h1>
		</div>
	{/if}
</header>

<style>
	header.sub-page {
		background: linear-gradient(hsl(0 0% 0% / 0.5), hsl(0 0% 0% / 0.5)),
			url('https://picsum.photos/id/788/1920/1080');
		background-size: cover;
		background-position: center bottom;
		background-attachment: fixed;
	}
</style>
