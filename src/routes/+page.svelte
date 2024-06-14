<script lang="ts">
	import { Hero } from '$lib/Hero';
	import { BlockHeader } from '$lib/BlockHeader';
	import { Cards } from '$lib/Cards';
	import { Pitch } from '$lib/Pitch';
	import { Profile } from '$lib/Profile';
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
	<BlockHeader
		content={{
			heading: 'Who We Are',
			detail:
				'My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method down to a science.',
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
	<Profile content={{
		figcaption: {
			heading: "Kyle P.",
			detail: "Owner/Developer"
		},
		visual: {
			source: "https://picsum.photos/500",
			alternativeText: 'Profile photo.',
			width:300,
			height: 300
		}
	}}/>
		<BlockHeader
		content={{
			heading: 'Our Blog',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration'
			}
		}}
	/>
	<Cards
		content={[
			{
				heading: 'Are hand coded websites better than WordPress?',
				detail:
					'Learn the differences in speed and security between the two.',
				visual: {
					source: 'https://picsum.photos/400/200',
					alternativeText: 'Decoration',
					width: 400,
					height: 200
				},
				callsToAction: [
					{
						label: 'Read More',
						action: '#read-more'
					}
				]
			},
			{
				heading: 'How to add Dark Mode to a custom website',
				detail:
					'Learn how I create Dark Mode and why it matters for your site.',
				visual: {
					source: 'https://picsum.photos/400/200',
					alternativeText: 'Decoration',
					width: 400,
					height: 200
				},
				callsToAction: [
					{
						label: 'Read More',
						action: '#read-more'
					}
				]
			},
			{
				heading: 'How to build responsive websites from scratch',
				detail:
					'I talk about how I start each website to make it responsive.',
				visual: {
					source: 'https://picsum.photos/400/200',
					alternativeText: 'Decoration',
					width: 400,
					height: 200
				},
				callsToAction: [
					{
						label: 'Read More',
						action: '#read-more'
					}
				]
			},
		]}
	/>
</section>
