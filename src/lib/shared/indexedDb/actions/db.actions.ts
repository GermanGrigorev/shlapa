import type { ISignified } from '$lib/entity/signified';
import { GAME_STORE, openGameDb, SIGNIFIED_STORE } from '../db';
import type { IGameDb, TGameKey } from '../model/game.model';
import type { ISignifiedDb } from '../model/signified.model';

export const dbActions = {
	getAllSigns: async (): Promise<ISignified[]> => {
		try {
			return (await openGameDb).getAllFromIndex(SIGNIFIED_STORE, 'gameKey');
		} catch (error) {
			console.error('Failed to get all signs:', error);
			return [];
		}
	},
	createGame: async ({ date }: { date: Date }): Promise<IGameDb | null> => {
		try {
			const db = await openGameDb;
			const tx = db.transaction([GAME_STORE], 'readwrite');
			const gameStore = tx.objectStore(GAME_STORE);

			let key = await gameStore.add({ date } as IGameDb);

			await tx.done;

			return { date, key };
		} catch (e: any) {
			console.error('Failed to add game:', e);
			// error(401, `Failed to add fish (${e.message})`);
			return null;
		}
	},
	createSignified: async (dto: { text: string; gameKey: TGameKey }) => {
		try {
			const db = await openGameDb;
			const tx = db.transaction([SIGNIFIED_STORE], 'readwrite');
			const signifiedStore = tx.objectStore(SIGNIFIED_STORE);

			let key = await signifiedStore.add(dto as ISignifiedDb);

			await tx.done;

			return { ...dto, key };
		} catch (e: any) {
			console.error('Failed to add sign:', e);
			// error(401, `Failed to add fish (${e.message})`);
			return null;
		}
	}
};
