<script lang="ts">
	export let source: string | undefined = undefined;
</script>

<img class="h-10 min-h-10 w-10 min-w-10" src={source ?? '/favicon.svg'} alt="A list item." width="40" height="40" />
