<script lang="ts">
	import { page } from '$app/stores';
	import { Drawer, getDrawerStore, initializeStores } from '@skeletonlabs/skeleton';
	import '../app.css';
	import { Footer } from './_components/Footer';
	import { Head } from './_components/Head';
	import { Header } from './_components/Header';

	export let data;

	initializeStores();

	const drawerStore = getDrawerStore();

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!variant-filled-primary' : '');
</script>

<Drawer>
	<nav class="list-nav">
		<ul class="p-4">
			{#each data.global.navigation.items as item}
				<li>
					<a class={classesActive(item.action)} href={item.action} on:click={() => drawerStore.close()}>
						<span class="text-base font-medium">
							{item.label}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>

<Head
	content={{
		title: $page.data?.page?.title ? `${$page.data.page.title} • ${data.global.title}` : data.global.title,
		description: $page.data?.page?.description ?? data.global.description
	}}
/>

<Header
	content={{
		title: data.global.title,
		navigation: data.global.navigation.items,
		pageTitle: $page.url.pathname !== '/' ? $page.data.page.title : undefined
	}}
/>
<main class="my-4 flex-1 space-y-16">
	<slot />
</main>
<Footer content={data.global} />
