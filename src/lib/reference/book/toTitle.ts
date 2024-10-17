import type { Book } from '$lib/types/book';
import titles from '$lib/data/titles.json';

export function toTitle(reference: Book) {
	let title = '';
	try {
		title = titles[reference.book];
	} catch {
		console.warn('Title not found', reference);
	}
	return title;
}
