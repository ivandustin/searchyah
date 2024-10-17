import titles from '$lib/data/titles.json';

export function parse(reference: string) {
	let components = reference.split('-');
	const last = components.pop();
	if (last) {
		const chapter = parseInt(last) - 1;
		const needle = components.join(' ').toLowerCase();
		const haystack = titles.map((title) => title.toLowerCase());
		const book = haystack.indexOf(needle);
		if (book >= 0) {
			return { book, chapter };
		}
	}
	throw new SyntaxError('Invalid reference');
}
