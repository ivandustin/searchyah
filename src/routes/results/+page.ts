import { get as getRefs } from '$lib/reference/get';
import { toRecord } from '$lib/reference/toRecord';

export async function load({ fetch, url }) {
	const query = url.searchParams.get('query');
	let references = [];
	if (query) {
		try {
			references = await getRefs(fetch, query);
		} catch {}
	}
	const results = references.map(toRecord);
	return { results };
}
