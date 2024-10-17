<script>
	import { page } from '$app/stores';
	export let data;
</script>

<main class="m-5 font-serif leading-10 text-2xl">
	{#each data.records as record}
		<p
			id={record.verse}
			class="my-3 p-5 rounded-lg"
			class:bg-gray-100={$page.url.hash == `#${record.verse}`}
		>
			<sup class="font-sans text-xs select-none text-gray-400">{record.verse}&nbsp;</sup
			>{record.text}
		</p>
	{/each}
</main>
