<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import { Footer } from './_components/Footer';
	import { Head } from './_components/Head';
	import { Header } from './_components/Header';

	export let data;
</script>

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
