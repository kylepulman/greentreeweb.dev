<script lang="ts">
	import { Hero } from '$lib/Hero';
	import { Pitch } from '$lib/Pitch';
	import { Tiers } from '$lib/Tiers';
</script>

<svelte:head>
	<title>Our Services &bull; Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="page">
	<Hero
		content={{
			reversed: true,
			heading: 'Web Design & Development Done Differently',
			detail:
				"What makes us unique in the development world is that we don't use WordPress, frameworks, or page builders. We meticulously write the code line by line. This gives us much more control over the design, and the website performs lightning fast because there's no bloated or messy code that slows it down.\n\nWebsites built by hand will out-perform most WordPress sites and drag and drop page builders which could cost thousands of dollars. When it comes to the web, the faster and more organized websites win.",
			visual: {
				source: 'https://picsum.photos/500',
				alternativeText: 'A placeholder photo.',
				width: 500,
				height: 500
			}
		}}
	/>
	<Pitch
		content={{
			reversed: true,
			heading: 'Search Engine Optimization for 2024',
			detail:
				'If someone tells you they can get you to the front page of Google in 3 months - RUN! Unless your website was featured by The New York Times it could take years to rank in the top of the search results.\n\nWe offer a number of the latest search engine optimization techniques for 2021:',
			points: [
				{
					heading: 'Keyword-Centered Content & Blogs'
				},
				{
					heading: 'Mobile-First-Optimized for the Best Experience'
				},
				{
					heading: 'Clean & Organized Code Structure For Web Crawlers'
				},
				{
					heading: 'Fully Responsive For Mobile, Tablet, & Desktop'
				}
			],
			visual: {
				source: 'https://picsum.photos/500',
				alternativeText: 'A placeholder photo.',
				width: 500,
				height: 500
			}
		}}
	/>
	<Pitch
		content={{
			heading: 'Logos, Graphic Design, & Branding',
			detail:
				"We also offer logo and graphic design services via our own in-house graphic designer. If you have an existing logo that needs a touch up or need a completely new one we can help build your business's brand.",
			points: [
				{
					heading: 'Logos Starting at $350',
					detail: 'Rates may increase based on complexity, number of hours, and number of revisions'
				},
				{
					heading: 'Social Media Graphics',
					detail:
						'Make a post that stands out with its own custom graphics. Give us a call for plans and rates.'
				}
			],
			visual: {
				source: 'https://picsum.photos/500',
				alternativeText: 'A placeholder photo.',
				width: 500,
				height: 500
			}
		}}
	/>
	<Hero
		content={{
			heading: 'Lifetime Updates For Your Website',
			detail:
				'Google changes its search algorithm standards every so often, changing what is important to rank. And web accessibility guidelines for users with screen readers get updated as well. So we also include lifetime updates to your website to make sure it never goes out of date and is always changing with the times.',
			callsToAction: [
				{
					label: 'Read More',
					action: '#'
				}
			],
			// TODO: https://www.oakharborwebdesigns.com/html/services#updates
			visual: {
				source: 'https://picsum.photos/500',
				alternativeText: 'placeholder',
				width: 500,
				height: 500
			}
		}}
	/>
	<Tiers
		content={[
			{
				type: 'E-Commerce',
				heading: '$8K',
				points: [
					{
						heading: '$8000 min up front cost'
					},
					{
						heading: 'Custom designed'
					},
					{
						heading: 'Custom coded Shopify integration'
					},
					{
						heading: 'Easy to edit'
					}
				],
				callsToAction: [
					{
						label: 'Contact Us',
						action: 'tel:9103867339'
					}
				]
			},
			{
				type: 'Standard',
				heading: '$150/mo',
				points: [
					{
						heading: 'Unlimited edits'
					},
					{
						heading: 'Includes hosting'
					},
					{
						heading: '24/7 customer service'
					},
					{
						heading: 'Lifetime updates'
					}
				],
				callsToAction: [
					{
						label: 'Contact Us',
						action: 'tel:9103867339'
					}
				]
			},
			{
				type: 'Logos & Graphic Design',
				heading: '$0',
				points: [
					{
						heading: '2 revisions'
					},
					{
						heading: 'All file formats'
					},
					{
						heading: 'Ready to use'
					},
					{
						heading: 'FREE with subscription'
					}
				],
				callsToAction: [
					{
						label: 'Contact Us',
						action: 'tel:9103867339'
					}
				]
			}
		]}
	/>
</section>
