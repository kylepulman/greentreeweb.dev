<script lang="ts">
	import { page } from '$app/stores';
	import { contactDefaultContent } from '$lib/Contact';
	import { Chips } from '$lib/_Chips';
	import type { FooterShape } from '.';

	export let content: FooterShape;
</script>

<footer class="mx-auto my-8 w-full max-w-screen-xl space-y-4 px-4 lg:px-8">
	<div class="flex flex-col items-center gap-4">
		<Chips content={contactDefaultContent.chips} />
		<nav class="flex max-w-screen-md flex-wrap justify-center gap-2 p-2">
			{#each content.navigation.items as location}
				<a class="variant-soft-surface btn block w-24 rounded p-2 text-center hover:variant-soft-primary" class:!variant-filled-primary={$page.url.pathname === location.action} href={location.action}>
					{location.label}
				</a>
			{/each}
		</nav>
	</div>
	<div class="text-center">
		<small>Copyright &copy; {content.year} &bull; {content.title}</small>
	</div>
</footer>
