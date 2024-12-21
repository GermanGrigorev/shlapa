<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { EyeSolid } from 'flowbite-svelte-icons';

	let {
		text,
		isAlwaysVisible
	}: {
		text: string;
		isAlwaysVisible?: boolean;
	} = $props();

	let isVisible = $state<boolean>(isAlwaysVisible || false);

	const handleToggleVisibility = () => {
		if (isAlwaysVisible) return;
		isVisible = !isVisible;
	};
</script>

<div class="flex w-full flex-row justify-between gap-10 rounded-xl bg-my-opposite px-6 py-3">
	{#if isVisible}
		{text}
	{:else}
		<div class="h-6 w-full animate-pulse rounded-lg bg-slate-300"></div>
	{/if}
	{#if !isAlwaysVisible}
		<Button on:click={handleToggleVisibility} class="h-6 w-6"><EyeSolid /></Button>
	{/if}
</div>
