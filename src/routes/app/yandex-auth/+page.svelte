<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// @ts-ignore
		YaSendSuggestToken('https://7xl2-z0fk-tke9.gw-1a.dockhost.net/app');
	});
</script>

<svelte:head>
	<script
		src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-token-with-polyfills-latest.js"
	></script>
</svelte:head>
