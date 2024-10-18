import type { Verse } from '$lib/types/verse';

export function toFragment(reference: Verse): string {
	return `#${reference.verse + 1}`;
}
