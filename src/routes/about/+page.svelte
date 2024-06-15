<script lang="ts">
	import { BlockHeader } from '$lib/BlockHeader';
	import { Cards } from '$lib/Cards';
	import { Contact, contactContent } from '$lib/Contact';
	import { Content } from '$lib/Content';
	import { Visual } from '$lib/Visual';

	export let data;
</script>

<svelte:head>
	<title>About Us &bull; Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="hero">
	<Content content={data.hero.content} />
	<Visual content={data.hero.visual} />
</section>
<Cards
	content={[
		{
			heading: 'No pre-written content',
			detail: 'We write unique and engaging content around your company. Everyone is unique!',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 64,
				height: 64
			}
		},
		{
			heading: 'Unbeatable Customer Service',
			detail: 'No automated systems - When you need help the lead developer answers your call.',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 64,
				height: 64
			}
		},
		{
			heading: 'No Limits On Design',
			detail: 'We can edit the design to cater to your tastes. Everything is customizable!',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration',
				width: 64,
				height: 64
			}
		}
	]}
>
	<BlockHeader
		slot="header"
		content={{
			heading: 'Quality Over Quantity',
			detail: "We focus on the needs on each individual business and tailor content around what makes it unique. Our collaborative process is very hands on as we work closely with you to create a website you're 100% happy with and not something you just settle for."
		}}
	/>
</Cards>
<Contact content={contactContent}>
	<BlockHeader
		slot="header"
		content={{
			heading: 'Drop Us a Line',
			visual: {
				source: '/favicon.svg',
				alternativeText: 'decoration'
			}
		}}
	/>
</Contact>
