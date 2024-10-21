export interface Cache {
	[key: string]: any;
}

let memory: Cache = {};

export function cache(func: any) {
	return async function (key: string) {
		if (memory[key]) {
			console.log('Cache hit', key);
			return memory[key];
		}
		console.log('Cache miss', key);
		const data = await func(key);
		memory[key] = data;
		return data;
	};
}
