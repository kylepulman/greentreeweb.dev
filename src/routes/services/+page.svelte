<script lang="ts">
	import { Cards } from '$lib/Cards';
	import { Hero } from '$lib/Hero';

	export let data;
</script>

<Hero content={data.heroOne} />

<Hero options={{ isRowReverse: true }} content={data.heroTwo} />

<Hero content={data.heroThree} />

<Hero options={{ isRowReverse: true }} content={data.heroFour} />

<Cards content={data.cardsOne} />
