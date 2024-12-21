<script>
	import { goto } from '$app/navigation';
	import { Cta } from '$lib/component';
	import { routes } from '../routes';
</script>

<div class="">
	<div>
		<h1 class="text-3xl">Shlapa</h1>

		<Cta class="text-red" onclick={() => goto(routes.deck)}>Edit deck</Cta>
		<Cta class="text-red" onclick={() => goto(routes.game)}>Start game</Cta>

		<div class="flex justify-center p-10">
			Шляпа (также шапка[1], кастрюлька[2]) — салонная командно-индивидуальная или парная
			интеллектуальная игра, в которой игрок должен за небольшое время объяснить как можно больше
			слов, чтобы его партнер их отгадал. Англоязычный аналог этой игры — «Alias» (об этой игре
			написано ниже)[3].
		</div>
	</div>
	<footer>I Am footer</footer>
</div>

<style>
</style>
