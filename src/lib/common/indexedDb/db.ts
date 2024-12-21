import { openDB, type DBSchema } from 'idb';
import type { ISignifiedDb } from './model/signified.model';
import type { IGameDb } from './model/game.model';
import type { IPlayerDb } from './model/player.model';

export const DB_NAME = 'gameDb';
export const SIGNIFIED_STORE = 'signified';
export const GAME_STORE = 'game';
export const PLAYER_STORE = 'player';

enum DbVersionTypes {
	Unset,
	Initial
}

const DB_VERSION: number = DbVersionTypes.Initial;

interface IDb extends DBSchema {
	[SIGNIFIED_STORE]: {
		key: ISignifiedDb['key'];
		value: ISignifiedDb;
		indexes: { gameKey: ISignifiedDb['gameKey'] };
	};
	[GAME_STORE]: {
		key: IGameDb['key'];
		value: IGameDb;
		indexes: { date: IGameDb['date'] };
	};
	[PLAYER_STORE]: {
		key: IPlayerDb['key'];
		value: IPlayerDb;
	};
}

export const openGameDb = openDB<IDb>(DB_NAME, DB_VERSION, {
	async upgrade(db, oldVersion, newVerstion, tx) {
		console.log(`updrade db from v${oldVersion} to v${DB_VERSION}`);

		// When new db is created oldVersion is 0 and newVersion is last

		try {
			const signifiedStore = db.createObjectStore(SIGNIFIED_STORE, {
				keyPath: 'key',
				autoIncrement: true
			});
			signifiedStore.createIndex('gameKey', 'gameKey');
			const gameStore = db.createObjectStore(GAME_STORE, {
				keyPath: 'key',
				autoIncrement: true
			});
			gameStore.createIndex('date', 'date');
			db.createObjectStore(PLAYER_STORE, {
				keyPath: 'key',
				autoIncrement: true
			});
		} catch (e) {
			console.error(e);
		}
	}
});
