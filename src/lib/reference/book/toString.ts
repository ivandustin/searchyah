import type { Book } from '$lib/types/book';
import titles from '$lib/data/titles.json';

export function toString(reference: Book) {
	return titles[reference.book];
}
