<script lang="ts">
	import { Alert, DarkMode } from 'flowbite-svelte';
	import { routes } from '../routes';
	let { children } = $props();
</script>

<div class=" min-h-screen bg-amber-50 text-amber-950 dark:bg-amber-950 dark:text-amber-50">
	<header>
		<DarkMode />
		<a href={routes.home}>Home</a>
		<a href={routes.deck}>Deck</a>
		<a href={routes.game}>Game</a>
		<a href="/">Landing</a>
	</header>
	{@render children()}
</div>
