<script lang="ts">
	import { Contact, contactDefaultContent } from '$lib/Contact';
</script>

<Contact
	content={{
		chips: contactDefaultContent.chips,
		form: contactDefaultContent.form,
		header: {
			image: true,
			detail: ["I'd love to set up a time to learn more about your business and how I could bring value to it."]
		}
	}}
/>
