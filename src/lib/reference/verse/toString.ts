import { toString as chapterToString } from '$lib/reference/chapter/toString';
import type { Chapter } from '$lib/types/chapter';
import type { Verse } from '$lib/types/verse';

export function toString(reference: Verse) {
	const chapter = chapterToString(reference as Chapter);
	const verse = reference.verse + 1;
	return `${chapter}:${verse}`;
}
