export function parse(reference: string) {
	const book: number = parseInt(reference.slice(0, 2)) - 1;
	const chapter: number = parseInt(reference.slice(2, 5)) - 1;
	const verse: number = parseInt(reference.slice(5, 8)) - 1;
	return { book, chapter, verse };
}
