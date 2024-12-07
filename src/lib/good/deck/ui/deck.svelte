<script lang="ts">
	import { Signified, type ISignified } from '$lib/entity/signified';
	import { deckStore } from '$lib/feature/store-deck';
	import { GradientButton, Input, Label } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let inputValue = $state<string>('');

	onMount(async () => {
		const db = await import('$lib/shared/indexedDb');
		const res = await db.dbActions.getAllSigns();
		$deckStore = res;
		console.log(res);
	});

	const handleSubmit = async () => {
		const db = await import('$lib/shared/indexedDb');
		const game = await db.dbActions.createGame({ date: new Date() });
		if (game) {
			const signified = await db.dbActions.createSignified({
				text: inputValue,
				gameKey: game?.key
			});
			if (signified) {
				$deckStore = [...$deckStore, signified];
			}
		}
		inputValue = '';
	};
</script>

<div class="p-3">
	<form class="mb-5 flex items-end gap-5" onsubmit={handleSubmit}>
		<Label class=""
			>Add word
			<Input required bind:value={inputValue} class=" bg-slate-200" type="text" />
		</Label>
		<GradientButton color="pinkToOrange" type="submit">Add</GradientButton>
	</form>
	{#each $deckStore.toReversed() as card (card.key)}
		<div class="mb-2">
			<Signified text={card.text} />
		</div>
	{/each}
</div>
