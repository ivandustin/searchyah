import { get as fetch } from '$lib/json/get';
import { cache } from '$lib/cache';

export const get = cache(fetch);
