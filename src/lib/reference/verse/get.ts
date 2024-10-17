import { parse } from '$lib/reference/verse/parse';
import { PUBLIC_API } from '$env/static/public';

export async function get(fetch: any, query: string) {
	let response = await fetch(`${PUBLIC_API}?q=${query}`);
	let results = await response.json();
	let references = results.map(parse);
	return references;
}
