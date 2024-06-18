<script lang="ts">
	import { Cards } from '$lib/Cards';
	import { Hero } from '$lib/Hero';

	export let data;
</script>

<Hero content={data.heroOne} />

<Cards content={data.cardsOne} />

<Hero options={{ isRowReverse: true, isCover: true, grow: 'article' }} content={data.heroTwo} />

<Cards content={data.cardsTwo} />

<Hero options={{ grow: 'article', isRounded: true }} content={data.heroThree} />

<Cards content={data.cardsThree} />
