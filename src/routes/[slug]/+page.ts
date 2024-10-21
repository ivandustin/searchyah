import { toFragment } from '$lib/reference/verse/toFragment';
import { toString } from '$lib/reference/chapter/toString';
import { parse } from '$lib/reference/chapter/slug/parse';
import type { Chapter } from '$lib/types/chapter';
import { PUBLIC_DATA } from '$env/static/public';
import type { Verse } from '$lib/types/verse';
import { get } from '$lib/json/get';
import { cache } from '$lib/cache';

export async function load({ params }) {
	const chapter: Chapter = parse(params.slug);
	const title = toString(chapter);
	const data = await cache(get)(PUBLIC_DATA);
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
	return { title, items };
}
