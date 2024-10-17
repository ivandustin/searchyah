<script>
	import { toString } from '$lib/reference/verse/toString';
	import { toSlug } from '$lib/reference/chapter/toSlug';
	import { toText } from '$lib/reference/verse/toText';
	export let data;
</script>

<main class="m-10">
	{#each data.verses as verse}
		<div class="my-20">
			<p class="my-5 text-blue-500 tracking-widest">
				<a href="/{toSlug(verse)}#{verse.verse + 1}">{toString(verse)}</a>
			</p>
			<p class="font-serif leading-10 text-2xl">{toText(verse)}</p>
		</div>
	{/each}
</main>
