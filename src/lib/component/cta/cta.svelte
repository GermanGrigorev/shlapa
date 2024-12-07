<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tag?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { tag = 'button', children, ...rest }: Props = $props();
</script>

<svelte:element this={tag} {...rest}>
	{@render children?.()}
</svelte:element>
