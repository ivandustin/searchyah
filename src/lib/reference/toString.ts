import { toTitle } from './toTitle';

export function toString(reference: any) {
	const title = toTitle(reference);
	const chapter = reference.chapter + 1;
	const verse = reference.verse + 1;
	return `${title} ${chapter}:${verse}`;
}
