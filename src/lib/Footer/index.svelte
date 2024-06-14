<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import type { FooterShape } from '.';

	export let content: FooterShape;
</script>

<footer class="page my-8 space-y-4 px-4">
	<div class="mx-auto flex max-w-64 flex-col justify-between gap-4 lg:flex-row">
		<div class="flex flex-col items-center space-y-2 text-center">
			<h3 class="h3">{content.title}</h3>
			<p>{content.email}</p>
			<p>{content.phone}</p>
			<LightSwitch />
		</div>
		<nav class="list-nav space-y-2">
			<h3 class="h3">{content.navigation.header.heading}</h3>
			<ul>
				{#each content.navigation.items as location}
					<li>
						<a href={location.action}>
							<span><img src="/favicon.svg" alt="A list item." width="16" height="16" /></span>
							<span class="flex-auto">{location.label}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<div class="list space-y-2">
			<h3 class="h3">{content.services.header.heading}</h3>
			<ul class="space-y-2">
				{#each content.services.items as item}
					<li>
						<span><img src="/favicon.svg" alt="A list item." width="16" height="16" /></span>
						<span class="flex-auto">{item.heading}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="text-center">
		<small>Copyright &copy; {content.year} &bull; {content.title}</small>
	</div>
</footer>
