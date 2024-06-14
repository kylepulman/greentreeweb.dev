<script lang="ts">
	import { ContactForm, contactFormContent } from '$lib/ContactForm';
	import { Contacts, contactsContent } from '$lib/Contacts';
</script>

<section class="page my-8 px-4">
	<Contacts content={contactsContent} />
	<ContactForm content={contactFormContent} />
</section>
