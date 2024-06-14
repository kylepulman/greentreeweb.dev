<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ContactFormShape } from '.';

	export let content: ContactFormShape;
</script>

<form class="card variant-ghost-surface my-8 max-w-prose space-y-4 p-4" method="post" use:enhance>
	<label class="label" for={content.input.name.name}>
		<span>{content.input.name.label}</span>
		<input
			class="input variant-ghost-primary"
			type={content.input.name.type}
			name={content.input.name.name}
			id={content.input.name.name}
			required={content.input.name.isRequired}
			placeholder={content.input.name.placeholder}
		/>
	</label>

	<label class="label" for={content.input.email.name}>
		<span>{content.input.email.label}</span>
		<input
			class="input variant-ghost-primary"
			type={content.input.email.type}
			name={content.input.email.name}
			id={content.input.email.name}
			required={content.input.email.isRequired}
			placeholder={content.input.email.placeholder}
		/>
	</label>

	<label class="label" for={content.input.message.name}>
		<span>{content.input.message.label}</span>
		<textarea
			class="textarea variant-ghost-primary"
			name={content.input.message.name}
			id={content.input.message.name}
			required={content.input.message.isRequired}
			placeholder={content.input.message.placeholder}
		></textarea>
	</label>

	<button class="variant-filled-primary btn" type="submit">{content.submit.label}</button>
</form>
