import type { Verse } from '$lib/types/verse';
import { toTitle } from '../book/toTitle';

export function toString(reference: Verse) {
	const title = toTitle(reference);
	const chapter = reference.chapter + 1;
	const verse = reference.verse + 1;
	return `${title} ${chapter}:${verse}`;
}
