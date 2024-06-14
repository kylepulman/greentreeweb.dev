<script lang="ts">
	import { Cards } from '$lib/Cards';
</script>

<svelte:head>
	<title>Our Portfolio &bull; Greentree Web Development</title>
	<meta name="description" content="Business websites for home and outdoor services." />
</svelte:head>

<section class="page">
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
