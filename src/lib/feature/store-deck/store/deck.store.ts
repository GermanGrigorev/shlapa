import { writable } from 'svelte/store';
import type { TDeck } from '../model/deck.model';

export const deckStore = writable<TDeck>([]);
