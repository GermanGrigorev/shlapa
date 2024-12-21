<script lang="ts">
	import { Alert, BottomNav, BottomNavItem, DarkMode } from 'flowbite-svelte';
	import { routes } from '../routes';
	import { HomeSolid, FolderOpenSolid, PlaySolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	let { children } = $props();

	let activeUrl = $derived($page.url.pathname);
</script>

<div class=" min-h-screen bg-amber-50 text-amber-950 dark:bg-amber-950 dark:text-amber-50">
	<div class=" mx-auto max-w-4xl">
		{@render children()}
	</div>
	<div>
		<BottomNav {activeUrl} position="absolute" classInner="grid-cols-3">
			<BottomNavItem href={routes.home} btnName="Home">
				<HomeSolid
					class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
				/>
			</BottomNavItem>
			<BottomNavItem href={routes.deck} btnName="Deck">
				<FolderOpenSolid
					class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
				/>
			</BottomNavItem>
			<BottomNavItem href={routes.game} btnName="Game">
				<PlaySolid
					class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
				/>
			</BottomNavItem>
		</BottomNav>
	</div>
</div>
