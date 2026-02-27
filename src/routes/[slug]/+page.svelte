<script>
	import { page } from '$app/stores';
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<main class="m-5 mb-[38.2vh]">
	<h1 class="p-5 text-gray-400 uppercase">{data.title}</h1>
	<div class="font-serif leading-10 text-2xl">
		{#each data.items as item}
			<p
				id={item.verse}
				class="my-3 p-5 rounded-lg"
				class:bg-gray-100={$page.url.hash == item.fragment}
				class:dark:bg-gray-800={$page.url.hash == item.fragment}
			>
				<sup class="font-sans text-xs text-gray-400 select-none">{item.verse}&nbsp;</sup>{item.text}
			</p>
		{/each}
	</div>
</main>

<footer class="m-10 text-lg">
	<a href="/" class="text-blue-500 tracking-widest">Back to search</a>
</footer>
