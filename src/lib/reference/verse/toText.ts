import type { Verse } from '$lib/types/verse';
import kjv from '$lib/data/kjv.json';

const data: any = kjv;

export function toText(reference: Verse) {
	return data[reference.book][reference.chapter][reference.verse];
}
