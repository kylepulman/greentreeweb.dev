<script lang="ts">
	export let value: string[];
</script>

{#each value as p}
	<p>{p}</p>
{/each}
