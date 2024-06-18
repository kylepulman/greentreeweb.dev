<script lang="ts">
	import { Cards } from '$lib/Cards';
	import { Contact, type ContactShape } from '$lib/Contact';
	import { Hero } from '$lib/Hero';

	export let data;
	export let form: ContactShape['formResult'];

	console.log(data);
</script>

<Hero options={{ isCover: true, grow: 'article' }} content={data.heroOne} />

<Cards content={data.cardsOne} />

<Contact content={{ ...data.contactOne, formResult: form }} />
