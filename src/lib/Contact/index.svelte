<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ContactShape } from '.';

	export let content: ContactShape;
</script>

<section class="page space-y-8">
	<slot name="header" />
	<div class="flex flex-col gap-4 sm:flex-row">
		<div class="flex flex-1 flex-wrap content-start justify-end gap-4">
			{#each content.contactCards as contact}
				<a class="card flex min-w-fit flex-1 gap-4 p-4 md:max-w-fit" href={contact.action}>
					<img src={contact.visual.source} alt={contact.visual.alternativeText} width={contact.visual.width} height={contact.visual.height} />
					<div class="truncate">
						<h3 class="h3">{contact.heading}</h3>
						<p>{contact.detail}</p>
					</div>
				</a>
			{/each}
		</div>
		<form class="card variant-ghost-surface flex-1 space-y-4 p-4" method="post" use:enhance>
			<label class="label" for={content.input.name.name}>
				<span>{content.input.name.label}</span>
				<input class="input variant-ghost-primary" type={content.input.name.type} name={content.input.name.name} id={content.input.name.name} required={content.input.name.isRequired} placeholder={content.input.name.placeholder} />
			</label>
			<label class="label" for={content.input.email.name}>
				<span>{content.input.email.label}</span>
				<input class="input variant-ghost-primary" type={content.input.email.type} name={content.input.email.name} id={content.input.email.name} required={content.input.email.isRequired} placeholder={content.input.email.placeholder} />
			</label>
			<label class="label" for={content.input.message.name}>
				<span>{content.input.message.label}</span>
				<textarea class="textarea variant-ghost-primary" name={content.input.message.name} id={content.input.message.name} required={content.input.message.isRequired} placeholder={content.input.message.placeholder}></textarea>
			</label>
			<button class="variant-filled-primary btn" type="submit">{content.submit.label}</button>
		</form>
	</div>
</section>
