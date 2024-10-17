import type { Book } from './book';

export interface Chapter extends Book {
	chapter: number;
}
