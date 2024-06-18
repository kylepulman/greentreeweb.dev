<script lang="ts">
	import { Icon } from '$lib/_Icon';
	import type { HeroOptions, HeroShape } from '.';

	export let content: HeroShape = {
		article: {
			subheading: 'No-nonsense contract',
			heading: '$0 Down, $150 Per Month,\n12 Month Minimum Contract',
			detail: ['$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved.', 'You own your domain, content, listing, and profiles. Cancel anytime with no fees or hassle.'],
			list: [
				{
					heading: 'Hosting Fees Included',
					detail: 'Hosting fees are built right into the monthly payment.'
				},
				{
					heading: 'Unlimited Edits',
					detail: 'Change anything you want at anytime and it will be done that day.'
				},
				{
					heading: '24/7 Customer Service',
					detail: 'Call direct anytime day or night, no phone trees or automated responses.'
				},
				{
					heading: 'Web Design & Development',
					detail: 'Includes over 40 hours of design, development, and testing.'
				},
				{
					heading: '100 Google Page Speed Score',
					detail: 'We can achieve a perfect 100 on Google Page Speed scores and boost your search ranking.'
				},
				{
					heading: 'Google Analytics',
					detail: 'We install Analytics for free to monitor traffic and where it comes from.'
				}
			],
			callsToAction: [
				{ label: 'Call Us', action: 'tel:3867339' },
				{ label: 'Learn More', action: '#' }
			]
		},
		figure: {
			source: 'https://picsum.photos/id/701/900',
			alternativeText: 'A field of blue flowers.',
			width: 900,
			height: 900,
			figcaption: {
				heading: 'Blue Flowers',
				detail: 'A field of blue flowers.'
			}
		}
	};

	export let options: HeroOptions = {
		isColReverse: false,
		isRowReverse: false,
		isCover: false,
		grow: false
	};
</script>

<section class="page flex flex-col gap-8 lg:flex-row lg:gap-4 xl:gap-8" class:flex-col-reverse={options.isColReverse} class:lg:flex-row-reverse={options.isRowReverse}>
	<article class="flex-1 space-y-4 self-center" class:flex-2={options.grow === 'article'}>
		{#if content.article.subheading}
			<h3 class="text-primary-700-200-token">{content.article.subheading}</h3>
		{/if}
		<h2 class="h1">{content.article.heading}</h2>
		{#if content.article.detail}
			{#each content.article.detail as p}
				<p>{p}</p>
			{/each}
		{/if}
		{#if content.article.list}
			<ul class="list space-y-4">
				{#each content.article.list as item}
					<li>
						<span>
							<Icon />
						</span>
						<span>
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
		<nav class="flex flex-wrap gap-2">
			{#each content.article.callsToAction as callToAction}
				<a href={callToAction.action} class="variant-filled btn [&:nth-of-type(1)]:variant-filled-primary [&:nth-of-type(2)]:variant-filled-secondary [&:nth-of-type(3)]:variant-filled-tertiary">
					{callToAction.label}
				</a>
			{/each}
		</nav>
	</article>
	<div class="relative flex-1" class:self-center={options.isCover === false} class:flex-2={options.grow === 'figure'}>
		<figure class="relative flex items-center justify-center" class:h-full={options.isCover}>
			<img class="object-cover" class:rounded-full={options.isRounded} class:h-full={options.isCover} src={content.figure.source} alt={content.figure.alternativeText} width={content.figure.width} height={content.figure.height} />
			{#if content.figure.figcaption}
				<figcaption class="bg-surface-backdrop-token absolute bottom-0 left-0 p-1">
					<h5 class="h5">{content.figure.figcaption.heading}</h5>
					<p>{content.figure.figcaption.detail}</p>
				</figcaption>
			{/if}
		</figure>
	</div>
</section>
