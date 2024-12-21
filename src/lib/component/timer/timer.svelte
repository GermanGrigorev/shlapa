<script lang="ts">
	import { NumberFlow } from '$lib/common/number-flow';
	import { onMount } from 'svelte';

	let { initialSecs }: { initialSecs: number } = $props();
	let seconds = $state<number>(initialSecs);

	function startTimer(durationInSeconds: number) {
		const endTime = Date.now() + durationInSeconds * 1000; // Calculate the end time in milliseconds

		function updateTimer() {
			const timeLeft = endTime - Date.now(); // Calculate remaining time
			if (timeLeft > 0) {
				seconds = Math.floor(timeLeft / 1000); // Convert milliseconds to seconds
				console.log(`Time left: ${seconds} seconds`);
				setTimeout(updateTimer, 1000 - (timeLeft % 1000)); // Adjust to keep accurate intervals
			} else {
				console.log('Timer completed!');
			}
		}

		updateTimer();
	}

	onMount(() => {
		startTimer(100);
	});
</script>

<div>
	<NumberFlow value={seconds} />
</div>
