<script>
	import { goto } from '$app/navigation';
	import { Cta } from '$lib/component/cta';
	import { routes } from '../routes';
</script>

<div class="containerMy">
	<div>
		<h1 class="text-3xl">Shlapa</h1>

		<Cta class="text-red" onclick={() => goto(routes.deck)}>Edit deck</Cta>
		<Cta class="text-red" onclick={() => goto(routes.game)}>Start game</Cta>
	</div>
	<footer>I Am footer</footer>
</div>

<style>
	.containerMy {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
	}
</style>
