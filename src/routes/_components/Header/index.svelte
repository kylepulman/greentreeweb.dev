<script lang="ts">
	import { LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { HeaderShape } from '.';
	import Menu from '$lib/Icons/Menu.svelte';

	export let content: HeaderShape;

	const drawerStore = getDrawerStore();
</script>

<header class:sub-page={content.pageTitle}>
	{#if content.pageTitle}
		<div class="flex h-48 items-center justify-center px-4">
			<h1 class="h1">{content.pageTitle}</h1>
		</div>
	{/if}
</header>

<nav class="bg-surface-50-900-token sticky top-0 z-10 py-2 lg:py-4">
	<div class="page flex flex-col items-center gap-2 md:gap-4 lg:flex-row">
		<div class="flex w-full items-center justify-between gap-2">
			<a class="flex items-center gap-2" href="/">
				<img class="h-9 min-h-9 w-9 min-w-9" src="/favicon.svg" alt="Greentree Web Development logo" width="36" height="36" />
				<span class="h4 leading-tight">{content.title}</span>
			</a>
			<div class="flex items-center gap-2">
				<LightSwitch />
				<button class="btn-icon" on:click={() => drawerStore.open()}>
					<Menu />
				</button>
			</div>
		</div>
	</div>
</nav>

<style>
	header.sub-page {
		background: linear-gradient(hsl(0 0% 0% / 0.5), hsl(0 0% 0% / 0.5)), url('https://picsum.photos/id/788/1920/1080');
		background-size: cover;
		background-position: center bottom;
		background-attachment: fixed;
	}
</style>
