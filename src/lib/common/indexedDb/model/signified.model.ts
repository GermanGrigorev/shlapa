import type { TGameKey } from './game.model';

export type TSignifiedKey = number;

export interface ISignifiedDb {
	key: TSignifiedKey;
	gameKey: TGameKey;
	text: string;
}
