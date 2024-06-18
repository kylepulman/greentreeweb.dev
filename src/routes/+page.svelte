<script lang="ts">
	import { Cards } from '$lib/Cards';
	import { Hero } from '$lib/Hero';
	import tierContent from './_components/tierContent';
</script>

<Hero
	content={{
		article: {
			heading: 'Websites that help businesses thrive.',
			detail: ['A no-nonsense website solution so you can get back to running your business.'],
			callsToAction: [{ label: 'Get in Touch', action: '/contact' }]
		},
		figure: {
			source: 'https://picsum.photos/id/701/900/500',
			alternativeText: 'A field of blue flowers.',
			width: 900,
			height: 500
		}
	}}
/>

<Cards
	content={{
		header: {
			heading: 'What We Do',
			detail: ['We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business.']
		},
		articles: [
			{
				heading: 'Mobile-first Design',
				detail: ['We start building your site for mobile devices first, then we add on to it to make tablet and desktop.'],
				image: {
					source: '/favicon.svg',
					alternativeText: 'Decoration',
					width: 48,
					height: 48
				}
			},
			{
				heading: 'Fully Responsive',
				detail: ['Your website will fit all mobile screens sizes, tablets, and desktop sizes so new clients can access your site from anywhere.'],
				image: {
					source: '/favicon.svg',
					alternativeText: 'Decoration',
					width: 48,
					height: 48
				}
			},
			{
				heading: 'Optimization',
				detail: ['60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines.'],
				image: {
					source: '/favicon.svg',
					alternativeText: 'Decoration',
					width: 48,
					height: 48
				}
			}
		]
	}}
/>

<Hero
	options={{
		isRowReverse: true,
		isCover: true,
		grow: 'article'
	}}
/>

<Cards />

<Hero
	options={{ grow: 'article', isRounded: true }}
	content={{
		article: {
			heading: 'Who We Are',
			detail: ['My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method down to a science.'],
			callsToAction: [
				{
					label: 'Learn More',
					action: '/about'
				}
			]
		},
		figure: {
			source: '/2024-03-21-me.gif',
			alternativeText: 'Profile photo.',
			width: 900,
			height: 900,
			figcaption: {
				heading: 'Kyle P.',
				detail: 'Owner/Developer'
			}
		}
	}}
/>

<Cards content={tierContent} />
