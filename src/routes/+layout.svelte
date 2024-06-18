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
			{#each data.globalContent.actions as item}
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
		title: $page.data?.page?.title ? `${$page.data.page.title} • ${data.globalContent.title}` : data.globalContent.title,
		description: $page.data?.page?.description ?? data.globalContent.description
	}}
/>

<Header
	content={{
		icon: data.globalContent.icon,
		title: data.globalContent.title,
		pageTitle: $page.url.pathname !== '/' && $page.status === 200 ? $page.data.page.title : undefined
	}}
/>

<main class="flex-1">
	<slot />
</main>

<Footer content={data.globalContent} />
