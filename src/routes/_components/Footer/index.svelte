<script lang="ts">
	import { page } from '$app/stores';
	import { Chips } from '$lib/_Chips';
	import { Icon } from '$lib/_Icon';
	import type { FooterShape } from '.';

	export let content: FooterShape;
</script>

<footer class="mx-auto my-8 w-full max-w-screen-xl space-y-4 px-4 lg:px-8">
	<div class="flex flex-col items-center gap-2 text-center">
		<Icon source={content.icon} />
		<h3 class="h3">{content.title}</h3>
		<p>{content.description}</p>
	</div>
	<div class="flex flex-col items-center gap-4">
		<Chips content={content.chips} />
		<nav class="flex max-w-screen-md flex-wrap justify-center gap-2 p-2">
			{#each content.actions as action}
				<a class="variant-soft-surface btn block w-24 rounded p-2 text-center hover:variant-soft-primary" class:!variant-filled-primary={$page.url.pathname === action.action} href={action.action}>
					{action.label}
				</a>
			{/each}
		</nav>
	</div>
	<div class="text-center">
		<small>Copyright &copy; {new Date().getFullYear()} &bull; {content.title}</small>
	</div>
</footer>
