<script lang="ts">
	import { Contact, type ContactShape } from '$lib/Contact';

	export let data;
	export let form: ContactShape['formResult'];
</script>

<Contact content={{ ...data.contactOne, formResult: form }} />
