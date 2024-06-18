<script lang="ts">
	import { enhance } from '$app/forms';
	import { BlockHeader } from '$lib/_BlockHeader';
	import { Chips } from '$lib/_Chips';
	import { contactDefaultContent, type ContactShape } from '.';

	export let content: ContactShape = contactDefaultContent;
</script>

<section class="page space-y-8">
	{#if content.header}
		<BlockHeader content={content.header} />
	{/if}
	<div class="flex flex-2 flex-col items-start gap-4 md:flex-row">
		<Chips content={contactDefaultContent.chips} />
		<form class="card variant-ghost-surface w-full flex-1 space-y-4 p-4" method="post" use:enhance>
			<label class="label" for={content.form.input.name.name}>
				<span>{content.form.input.name.label}</span>
				<input class="input variant-ghost-primary" type={content.form.input.name.type} name={content.form.input.name.name} id={content.form.input.name.name} required={content.form.input.name.isRequired} placeholder={content.form.input.name.placeholder} />
			</label>
			<label class="label" for={content.form.input.email.name}>
				<span>{content.form.input.email.label}</span>
				<input class="input variant-ghost-primary" type={content.form.input.email.type} name={content.form.input.email.name} id={content.form.input.email.name} required={content.form.input.email.isRequired} placeholder={content.form.input.email.placeholder} />
			</label>
			<label class="label" for={content.form.input.message.name}>
				<span>{content.form.input.message.label}</span>
				<textarea class="textarea variant-ghost-primary" name={content.form.input.message.name} id={content.form.input.message.name} required={content.form.input.message.isRequired} placeholder={content.form.input.message.placeholder}></textarea>
			</label>
			<button class="variant-filled-primary btn" type="submit">{content.form.submit.label}</button>
		</form>
	</div>
</section>
