<script lang="ts">
	import { Cta, Timer } from '$lib/component';
	import { Signified, type ISignified } from '$lib/entity/signified';
	import { deckStore } from '$lib/feature/store-deck';

	let current = $state<ISignified>($deckStore[0]);

	const handleChange = () => {
		current = $deckStore[Math.floor(Math.random() * $deckStore.length)];
	};
</script>

<div class="flex justify-center pt-10">
	<div class="py-5"><Timer initialSecs={60} /></div>
	<Cta class=" h-96 w-96" onclick={handleChange}>
		<Signified isAlwaysVisible text={current?.text} />
	</Cta>
</div>
