import { get } from '$lib/reference/verse/get';

export async function load({ fetch, url }) {
	let query = url.searchParams.get('query');
	if (query) {
		const verses = await get(fetch, query);
		return { verses };
	}
	throw new Error('Invalid query');
}
