import {
	canAnimate as _canAnimate,
	prefersReducedMotion as _prefersReducedMotion
} from 'number-flow';
import { onMount } from 'svelte';
import { derived, readable } from 'svelte/store';

export type { Value, Format, Trend } from 'number-flow';
export { default as NumberFlowGroup } from './number-flow-group.svelte';
export { default as NumberFlow, NumberFlowElement } from './number-flow-c.svelte';

const canAnimate = readable(false, (set) => {
	onMount(() => {
		set(_canAnimate);
	});
});

const prefersReducedMotion = readable(false, (set) => {
	onMount(() => {
		set(_prefersReducedMotion?.matches ?? false);
		const onChange = ({ matches }: MediaQueryListEvent) => {
			set(matches);
		};
		_prefersReducedMotion?.addEventListener('change', onChange);
		return () => {
			_prefersReducedMotion?.removeEventListener('change', onChange);
		};
	});
});

const canAnimateWithPreference = derived(
	[canAnimate, prefersReducedMotion],
	([canAnimate, prefersReducedMotion]) => canAnimate && !prefersReducedMotion
);

export const getCanAnimate = ({ respectMotionPreference = true } = {}) =>
	respectMotionPreference ? canAnimateWithPreference : canAnimate;
