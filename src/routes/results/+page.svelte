<script>
	export let data;
</script>

<svelte:head>
	<title>{data.query}</title>
</svelte:head>

<main class="m-5">
	{#each data.items as item}
		<a
			href={item.href}
			class="block p-5 my-10 rounded-lg dark:hover:bg-gray-900 hover:bg-gray-50 transition"
		>
			<p class="mb-5 text-blue-500 tracking-widest">
				{item.reference}
			</p>
			<p class="font-serif leading-10 text-2xl">{item.text}</p>
		</a>
	{/each}
</main>
