<script lang="ts">
	import { Cta } from '$lib/component/cta';
	import { Signified } from '$lib/entity/signified';
	import { deckStore } from '$lib/feature/store-deck';

	let inputValue = $state<string>('');

	const handleSubmit = () => {
		$deckStore = [...$deckStore, { text: inputValue }];
	};
</script>

<form onsubmit={handleSubmit}>
	<input bind:value={inputValue} class=" bg-slate-200" type="text" />
	<Cta type="submit">Add</Cta>
</form>
