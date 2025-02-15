<script>
	import { goto } from '$app/navigation';
	import { Cta } from '$lib/component';
	import { routes } from '../routes';
	import { Login } from '$lib/auth';
</script>

<div class="">
	<div>
		<h1 class="text-3xl">Shlapa</h1>

		<Cta class="text-red" onclick={() => goto(routes.deck)}>Edit deck</Cta>
		<Cta class="text-red" onclick={() => goto(routes.game)}>Start game</Cta>

		<div class="flex justify-center p-10">
			<Login />
		</div>
	</div>
	<footer>I Am footer</footer>
</div>

<style>
</style>
