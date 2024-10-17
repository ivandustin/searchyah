import type { Verse } from '$lib/types/verse';
import kjv from '$lib/data/kjv.json';

const data: any = kjv;

export function toText(reference: Verse) {
	let text = '';
	try {
		text = data[reference.book][reference.chapter][reference.verse];
	} catch {
		console.warn('Reference not found', reference);
	}
	return text;
}
