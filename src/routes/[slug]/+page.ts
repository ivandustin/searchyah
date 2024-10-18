import { toFragment } from '$lib/reference/verse/toFragment';
import { parse } from '$lib/reference/chapter/slug/parse';
import type { Chapter } from '$lib/types/chapter';
import type { Verse } from '$lib/types/verse';
import kjv from '$lib/data/kjv.json';

const data: any = kjv;

export function load({ params }) {
	const chapter: Chapter = parse(params.slug);
	const texts = data[chapter.book][chapter.chapter];
	const items = texts.map(function (text: string, index: number) {
		const verse = index + 1;
		const reference: Verse = {
			...chapter,
			verse: index
		};
		const fragment = toFragment(reference);
		return { verse, text, reference, fragment };
	});
	return { items };
}
