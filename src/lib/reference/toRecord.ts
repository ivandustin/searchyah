import { toString } from './toString';
import { toText } from './toText';

export function toRecord(ref: any) {
	const text = toText(ref);
	const reference = toString(ref);
	return { text, reference };
}
