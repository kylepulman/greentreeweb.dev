<script lang="ts">
	import { enhance } from '$app/forms';
	import { BlockHeader } from '$lib/_BlockHeader';
	import { Chips } from '$lib/_Chips';
	import { fade } from 'svelte/transition';
	import { type ContactShape } from '.';

	let sending: boolean = false;

	export let content: ContactShape;
</script>

<section class="page space-y-8">
	{#if content.blockHeader}
		<BlockHeader content={content.blockHeader} />
	{/if}
	<div class="flex flex-2 flex-col items-start gap-4 md:flex-row">
		<Chips content={content.chips} />
		<form
			class="card variant-ghost-surface w-full flex-1 space-y-4 p-4"
			method="post"
			use:enhance={() => {
				sending = true;
				return async ({ update }) => {
					sending = false;
					return await update();
				};
			}}
		>
			{#if sending}
				<div class="card variant-ghost-surface mx-auto w-fit p-4" in:fade>
					<p>Sending...</p>
				</div>
			{/if}
			{#if content.formResult?.error && sending === false}
				<div class="card variant-ghost-error mx-auto w-fit p-4" in:fade>
					<ul class="list">
						<p class="font-medium">Please address the following errors:</p>
						{#each Object.values(content.formResult.error) as value}
							<li>
								<span>—</span>
								<span>{value.message}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			{#if content.formResult?.success && sending === false}
				<div class="card variant-ghost-success mx-auto w-fit p-4" in:fade>
					<p>{content.formResult.success}</p>
				</div>
			{/if}
			<label class="label" for={content.form.input.name.name}>
				<span>{content.form.input.name.label}</span>
				<input class="input variant-ghost-primary" class:variant-ghost-error={!!content.formResult?.error?.name} type={content.form.input.name.type} name={content.form.input.name.name} id={content.form.input.name.name} required={content.form.input.name.isRequired} placeholder={content.form.input.name.placeholder} />
			</label>
			<label class="label" for={content.form.input.email.name}>
				<span>{content.form.input.email.label}</span>
				<input class="input variant-ghost-primary" class:variant-ghost-error={!!content.formResult?.error?.email} type={content.form.input.email.type} name={content.form.input.email.name} id={content.form.input.email.name} required={content.form.input.email.isRequired} placeholder={content.form.input.email.placeholder} />
			</label>
			<label class="label" for={content.form.input.message.name}>
				<span>{content.form.input.message.label}</span>
				<textarea class="textarea variant-ghost-primary" class:variant-ghost-error={!!content.formResult?.error?.message} name={content.form.input.message.name} id={content.form.input.message.name} required={content.form.input.message.isRequired} placeholder={content.form.input.message.placeholder}></textarea>
			</label>
			<button class="variant-filled-primary btn" type="submit">{content.form.submit.label}</button>
		</form>
	</div>
</section>
