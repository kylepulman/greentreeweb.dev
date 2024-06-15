<script lang="ts">
	import { BlockHeader } from '$lib/BlockHeader';
	import { Cards, portfolioContent } from '$lib/Cards';
	import { Content } from '$lib/Content';
	import { Profile } from '$lib/Profile';
	import { Tiers, tierContent } from '$lib/Tiers';
	import { Visual } from '$lib/Visual';

	export let data;
</script>

<svelte:head>
	<title>Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="hero">
	<Content content={data.hero.content} />
	<Visual content={data.hero.visual} />
</section>
<Cards
	content={[
		{
			heading: 'Mobile-first Design',
			detail: 'We start building your site for mobile devices first, then we add on to it to make tablet and desktop.',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration',
				width: 64,
				height: 64
			}
		},
		{
			heading: 'Fully Responsive',
			detail: 'Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration',
				width: 64,
				height: 64
			}
		},
		{
			heading: 'Optimization',
			detail: '60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration',
				width: 64,
				height: 64
			}
		}
	]}
>
	<BlockHeader
		slot="header"
		content={{
			heading: 'What We Do',
			detail: 'We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business.',
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
</Cards>
<section class="hero">
	<Visual content={data.pitch.visual} />
	<Content content={data.pitch.content} classes="flex-2" />
</section>
<Cards content={portfolioContent}>
	<BlockHeader
		slot="header"
		content={{
			heading: 'Our Portfolio',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration'
			}
		}}
	/>
</Cards>
<Profile
	options={{}}
	content={{
		heading: 'Who We Are',
		detail: 'My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method down to a science.',
		callsToAction: [
			{
				label: 'Learn More',
				action: '/about'
			}
		],
		figcaption: {
			heading: 'Kyle P.',
			detail: 'Owner/Developer'
		},
		visual: {
			source: 'https://picsum.photos/500',
			alternativeText: 'Profile photo.',
			width: 300,
			height: 300
		}
	}}
/>
<Cards
	content={[
		{
			heading: 'Are hand coded websites better than WordPress?',
			detail: 'Learn the differences in speed and security between the two.',
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
			detail: 'Learn how I create Dark Mode and why it matters for your site.',
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
			detail: 'I talk about how I start each website to make it responsive.',
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
		}
	]}
>
	<BlockHeader
		slot="header"
		content={{
			heading: 'Our Blog',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'Decoration'
			}
		}}
	/>
</Cards>
<Tiers content={tierContent} />
