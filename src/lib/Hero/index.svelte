<script lang="ts">
	import type { HeroContent, HeroOptions } from '.';

	export let content: HeroContent;
	export let options: HeroOptions;
</script>

<section
	class="page my-8 flex flex-col justify-between gap-4 {options.reversed
		? 'lg:flex-row-reverse'
		: 'lg:flex-row'}"
>
	<article class="space-y-4 self-center {options.layout?.article?.flex ?? 'flex-1'}">
		{#if content.subheading}
			<h3 class="text-primary-300">{content.subheading}</h3>
		{/if}
		{#if content.heading}
			<h2 class="h1 flex gap-2">{content.heading}</h2>
		{/if}
		{#if content.detail}
			{#each content.detail as p}
				<p>{p}</p>
			{/each}
		{/if}
		{#if content.list}
			<ul class="list space-y-2">
				{#each content.list as item}
					<li>
						<span><img src="/favicon.svg" alt="bullet" width="32" height="32" /></span>
						<span>
							{#if item.heading}
								<p class="font-bold">{item.heading}</p>
							{/if}
							{#if item.detail}
								<p>{item.detail}</p>
							{/if}
						</span>
					</li>
				{/each}
			</ul>
		{/if}
		{#if content.callsToAction}
			<nav class="flex flex-wrap items-center gap-4">
				{#each content.callsToAction as location}
					<a
						class="variant-filled btn [&:nth-of-type(1)]:variant-filled-primary [&:nth-of-type(2)]:variant-filled-secondary [&:nth-of-type(3)]:variant-filled-tertiary"
						href={location.action}>{location.label}</a
					>
				{/each}
			</nav>
		{/if}
	</article>
	{#if content.visual}
		<figure class=" {options.layout?.figure?.flex ?? 'flex-1'}">
			<img
				class="h-full w-full object-cover"
				src={content.visual.source}
				alt={content.visual.alternativeText}
				width={content.visual.width}
				height={content.visual.height}
			/>
		</figure>
	{/if}
</section>
