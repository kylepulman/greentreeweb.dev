<script lang="ts">
	import { page } from '$app/stores';
	import { SvelteComponent, onMount, type ComponentType } from 'svelte';

	const FALLBACK = '/favicon.svg';

	export let source: string = FALLBACK;

	let isMounted = false;
	let Icon: ComponentType<SvelteComponent> | undefined = undefined;
	let icon: string = FALLBACK;

	const fetchImage = async (source: string) => {
		try {
			const response = await fetch(`${$page.url.origin}${source}`);
			const blob = await response.blob();

			return URL.createObjectURL(blob);
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_) {
			console.log('Could not fetch image, using fallback...');
			return FALLBACK;
		}
	};

	onMount(async () => {
		if (!source.includes('.')) {
			try {
				const module = await import(`../icons/${source}.svelte`);
				Icon = module.default;
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (_) {
				console.log('Could not import image, using fallback...');
				icon = FALLBACK;
			}
		} else {
			icon = await fetchImage(source);
		}

		isMounted = true;
	});
</script>

{#if isMounted}
	{#if Icon}
		<svelte:component this={Icon} />
	{:else}
		<img class="h-10 min-h-10 w-10 min-w-10" src={icon} alt="An icon." width={40} height={40} />
	{/if}
{/if}
