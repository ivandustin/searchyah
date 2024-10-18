import { toFragment } from '$lib/reference/verse/toFragment';
import { toString } from '$lib/reference/verse/toString';
import { toSlug } from '$lib/reference/chapter/toSlug';
import { toText } from '$lib/reference/verse/toText';
import { get } from '$lib/reference/verse/get';
import type { Verse } from '$lib/types/verse';

export async function load({ fetch, url }) {
	let query = url.searchParams.get('query');
	if (query) {
		const verses = await get(fetch, query);
		const items = verses.map(function (verse: Verse) {
			const text = toText(verse);
			const reference = toString(verse);
			const slug = toSlug(verse);
			const fragment = toFragment(verse);
			const href = slug + fragment;
			return { text, reference, href };
		});
		return { items };
	}
	throw new Error('Invalid query');
}
