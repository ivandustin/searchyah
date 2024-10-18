import { toString as bookToString } from '$lib/reference/book/toString';
import type { Chapter } from '$lib/types/chapter';
import type { Book } from '$lib/types/book';

export function toString(reference: Chapter) {
	const title = bookToString(reference as Book);
	return `${title} ${reference.chapter + 1}`;
}
