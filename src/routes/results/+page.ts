import { toFragment } from '$lib/reference/verse/toFragment';
import { get as getVerses } from '$lib/reference/verse/get';
import { toString } from '$lib/reference/verse/toString';
import { toSlug } from '$lib/reference/chapter/toSlug';
import { toText } from '$lib/reference/verse/toText';
import { PUBLIC_DATA } from '$env/static/public';
import { get as getJSON } from '$lib/json/get';
import type { Verse } from '$lib/types/verse';
import { cache } from '$lib/cache';

export async function load({ fetch, url }) {
	let query = url.searchParams.get('query');
	if (query) {
		const [verses, data] = await Promise.all([
			cache(getVerses(fetch))(query),
			cache(getJSON)(PUBLIC_DATA)
		]);
		const items = verses.map(function (verse: Verse) {
			const text = toText(data, verse);
			const reference = toString(verse);
			const slug = toSlug(verse);
			const fragment = toFragment(verse);
			const href = slug + fragment;
			return { text, reference, href };
		});
		return { query, items };
	}
	throw new Error('Invalid query');
}
