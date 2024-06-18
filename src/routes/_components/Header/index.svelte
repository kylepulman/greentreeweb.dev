<script lang="ts">
	import { LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	import type { HeaderShape } from '.';
	import Menu from '$lib/Icons/Menu.svelte';
	import { Icon } from '$lib/_Icon';
	import { modeCurrent } from '@skeletonlabs/skeleton';

	export let content: HeaderShape;

	const drawerStore = getDrawerStore();
</script>

<header class:sub-page={content.pageTitle} class:dark={$modeCurrent === false} class:light={$modeCurrent === true}>
	{#if content.pageTitle}
		<div class="flex h-48 items-center justify-center p-4">
			<h1 class="h1">{content.pageTitle}</h1>
		</div>
	{/if}
</header>

<nav class="bg-surface-50-900-token sticky top-0 z-10 py-2 lg:py-4">
	<div class="mx-auto flex max-w-screen-xl flex-col items-center gap-2 px-4 md:gap-4 lg:flex-row lg:px-8">
		<div class="flex w-full items-center justify-between gap-2">
			<a class="flex items-center gap-2" href="/">
				<Icon />
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
	header.dark.sub-page {
		background: linear-gradient(hsl(0 0% 0% / 0.5), hsl(0 0% 0% / 0.5)), url('https://picsum.photos/id/701/1920/200');
		background-position: auto;
		background-size: auto;
		background-attachment: fixed;
	}

	header.light.sub-page {
		background: linear-gradient(hsl(0 0% 0% / 0), hsl(0 0% 0% / 0)), url('https://picsum.photos/id/866/1920/200');
		background-position: auto;
		background-size: auto;
		background-attachment: fixed;
	}
</style>
