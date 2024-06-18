<script lang="ts">
	import { BlockHeader } from '$lib/_BlockHeader';
	import { Icon } from '$lib/_Icon';
	import { type CardShape } from '.';

	export let content: CardShape;
</script>

<section class="page space-y-8">
	{#if content.header}
		<BlockHeader content={content.header} />
	{/if}
	<div class="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch">
		{#each content.articles as article}
			<article class="card variant-ghost-surface flex w-full max-w-sm flex-1 flex-col items-center space-y-4 p-4 text-center lg:max-w-full">
				{#if article.image}
					<img src={article.image.source} alt={article.image.alternativeText} width={article.image.width} height={article.image.height} />
				{:else if article.icon}
					<Icon source={article.icon} />
				{/if}
				<h2 class="h2 flex gap-2">
					{article.heading}
				</h2>
				{#if article.subheading}
					<h3 class="text-primary-700-200-token">{article.subheading}</h3>
				{/if}
				{#if article.detail}
					<div class="flex flex-1 items-center justify-center">
						{#each article.detail as p}
							<p>{p}</p>
						{/each}
					</div>
				{/if}
				{#if article.list}
					<ul class="list w-full space-y-4">
						{#each article.list as item}
							<li>
								<span>
									<Icon />
								</span>
								<span class="text-left">
									{#if item.heading}
										<h4 class="h4">{item.heading}</h4>
									{/if}
									{#if item.detail}
										<p>{item.detail}</p>
									{/if}
								</span>
							</li>
						{/each}
					</ul>
				{/if}
				{#if article.callsToAction}
					<nav class="flex flex-wrap items-center gap-2">
						{#each article.callsToAction as location}
							<a class="variant-filled btn first-of-type:variant-filled-primary [&:nth-of-type(2)]:variant-filled-secondary [&:nth-of-type(3)]:variant-filled-tertiary" href={location.action}>{location.label}</a>
						{/each}
					</nav>
				{/if}
			</article>
		{/each}
	</div>
</section>
