<script lang="ts">
	import { Hero } from '$lib/Hero';
	import { BlockHeader } from '$lib/BlockHeader';
	import { Cards } from '$lib/Cards';
	import { Pitch } from '$lib/Pitch';
</script>

<svelte:head>
	<title>Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="page">
	<Hero />
	<BlockHeader
		content={{
			heading: 'What We Do',
			detail:
				'We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business.',
			callsToAction: [
				{
					label: 'Learn More',
					action: '/about'
				}
			],
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration'
			}
		}}
	/>
	<Cards
		content={[
			{
				heading: 'Mobile-first Design',
				detail:
					'We start building your site for mobile devices first, then we add on to it to make tablet and desktop.',
				visual: {
					source: '/favicon.svg',
					alternativeText: 'Decoration',
					width: 64,
					height: 64
				}
			},
			{
				heading: 'Fully Responsive',
				detail:
					'Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.',
				visual: {
					source: '/favicon.svg',
					alternativeText: 'Decoration',
					width: 64,
					height: 64
				}
			},
			{
				heading: 'Optimization',
				detail:
					'60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.',
				visual: {
					source: '/favicon.svg',
					alternativeText: 'Decoration',
					width: 64,
					height: 64
				}
			}
		]}
	/>
	<Pitch />
	<BlockHeader
		content={{
			heading: 'Our Portfolio',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration'
			}
		}}
	/>
	<Cards
		content={[
			{
				order: 'variant-one',
				heading: 'Valley Construction - Seattle, WA',
				detail:
					'Valley Construction Supply is the largest privately held construction supply company in Seattle, WA for over 35 years.',
				visual: {
					source: 'https://picsum.photos/400/200',
					alternativeText: 'Decoration',
					width: 400,
					height: 200
				},
				callsToAction: [
					{
						label: 'Visit Valley Construction',
						action: '#valley'
					}
				]
			},
			{
				heading: "AB's Hillbilly Gyros - Oak Harbor, WA",
				detail:
					"AB's Hillbilly Gyros is a local fusion gyros restaurant that opened in 2018, we made their first website.",
				visual: {
					source: 'https://picsum.photos/400/200',
					alternativeText: 'Decoration',
					width: 400,
					height: 200
				},
				callsToAction: [
					{
						label: 'Visit Hillbilly Gyros',
						action: '#gyros'
					}
				]
			},
			{
				heading: 'Dr. Victoria Chan - Foster City, CA',
				detail:
					'Dr. Victoria Chan is a Naturopathic Doctor based in California who offers a holistic approach to mental health.',
				visual: {
					source: 'https://picsum.photos/400/200',
					alternativeText: 'Decoration',
					width: 400,
					height: 200
				},
				callsToAction: [
					{
						label: 'Visit Dr. Victoria',
						action: '#dr'
					}
				]
			}
		]}
	/>
</section>
