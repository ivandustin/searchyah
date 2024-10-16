import { PUBLIC_API } from '$env/static/public';
import { parse } from '$lib/reference/parse';

export async function get(fetch: any, query: string) {
	let response = await fetch(`${PUBLIC_API}?q=${query}`);
	let results = await response.json();
	let references = results.map(parse);
	return references;
}
