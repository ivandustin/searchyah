import { parse } from '$lib/reference/chapter/slug/parse';
import kjv from '$lib/data/kjv.json';

const data: any = kjv;

export function load({ params }) {
	const reference = parse(params.slug);
	const texts = data[reference.book][reference.chapter];
	const records = texts.map((text: string, index: number) => ({ text, verse: index + 1 }));
	return { records };
}
