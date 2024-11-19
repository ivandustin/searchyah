<script>
	import { page } from '$app/stores';
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main class="m-5 font-serif leading-10 text-2xl mb-[38.2vh]">
	{#each data.items as item}
		<p
			id={item.verse}
			class="my-3 p-5 rounded-lg"
			class:bg-gray-100={$page.url.hash == item.fragment}
			class:dark:bg-gray-800={$page.url.hash == item.fragment}
		>
			<sup class="font-sans text-xs select-none text-gray-400">{item.verse}&nbsp;</sup>{item.text}
		</p>
	{/each}
</main>
