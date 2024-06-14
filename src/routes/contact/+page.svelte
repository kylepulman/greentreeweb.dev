<script lang="ts">
	import { ContactForm } from '$lib/ContactForm';
	import { Contacts } from '$lib/Contacts';
</script>

<section class="page my-8 px-4">
	<Contacts
		content={[
			{
				visual: {
					source: '/favicon.svg',
					alternativeText: 'decoration',
					width: 64,
					height: 64
				},
				heading: 'Phone:',
				detail: '910-386-7339',
				action: 'tel:9103867339'
			},
			{
				visual: {
					source: '/favicon.svg',
					alternativeText: 'decoration',
					width: 64,
					height: 64
				},
				heading: 'Email:',
				detail: 'kyle@greentreeweb.dev',
				action: 'mail:kyle@greentreeweb.dev'
			}
		]}
	/>
	<ContactForm
		content={{
			heading: 'Drop Us a Line',
			input: {
				name: {
					name: 'name',
					type: 'text',
					label: 'Your name',
					placeholder: 'Kyle P.',
					isRequired: true
				},
				email: {
					name: 'email',
					type: 'email',
					label: 'Your email address',
					placeholder: 'kyle@greentreeweb.dev',
					isRequired: true
				},
				message: {
					name: 'message',
					type: 'textarea',
					label: 'Your message',
					placeholder: '',
					isRequired: true
				}
			},
			submit: {
				label: 'Send'
			}
		}}
	/>
</section>
