import type { Chapter } from '$lib/types/chapter';
import titles from '$lib/data/titles.json';

export function toSlug(reference: Chapter) {
	const chapter = reference.chapter + 1;
	const title = titles[reference.book];
	return `${title} ${chapter}`.toLowerCase().replace(/ /g, '-');
}
