<script lang="ts">
	import { BlockHeader } from '$lib/_BlockHeader';
	import { cardDefaultContent, type CardShape } from '.';

	export let content: CardShape = cardDefaultContent;
</script>

<section class="page space-y-8">
	{#if content.header}
		<BlockHeader content={content.header} />
	{/if}
	<div class="flex flex-col items-center gap-4 md:flex-row md:items-stretch">
		{#each content.articles as article}
			<article class="card variant-ghost-surface flex max-w-96 flex-1 flex-col items-center justify-between space-y-2 p-4 text-center">
				{#if article.image}
					<img src={article.image.source} alt={article.image.alternativeText} width={article.image.width} height={article.image.height} />
				{/if}
				<h2 class="h3 flex gap-2">
					{article.heading}
				</h2>
				{#if article.subheading}
					<h3 class="text-primary-200">{article.subheading}</h3>
				{/if}
				{#if article.detail}
					{#each article.detail as p}
						<p>{p}</p>
					{/each}
				{/if}
				{#if article.list}
					<ul class="list space-y-4">
						{#each article.list as item}
							<li>
								<span>
									<img class="h-12 max-h-12 min-h-12 w-12 min-w-12 max-w-12" src="/favicon.svg" alt="A list item." width="48" height="48" />
								</span>
								<span>
									{#if item.heading}
										<h4 class="h4">{item.heading}</h4>
									{/if}
									<p>{item.detail}</p>
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
