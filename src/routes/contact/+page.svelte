<script lang="ts">
	import { Contact, type ContactShape } from '$lib/Contact';
	import contactContent from '../../lib/content/contactContent';

	export let form: ContactShape['formResult'];
</script>

<Contact
	content={{
		blockHeader: {
			icon: contactContent.blockHeader.icon,
			detail: ["I'd love to set up a time to learn more about your business and how I could bring value to it."]
		},
		chips: contactContent.chips,
		form: contactContent.form,
		formResult: form
	}}
/>
