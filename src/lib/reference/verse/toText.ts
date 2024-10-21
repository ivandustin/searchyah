import type { Verse } from '$lib/types/verse';

export function toText(data: any, reference: Verse) {
	return data[reference.book][reference.chapter][reference.verse];
}
