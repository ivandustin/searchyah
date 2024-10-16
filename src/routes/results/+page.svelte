<script>
	export let data;
</script>

<main class="m-10">
	{#each data.results as result}
		<div class="my-20">
			<p class="font-serif leading-10 text-2xl">{result.text}</p>
			<p class="mt-5 text-xs uppercase text-gray-400 tracking-widest">{result.reference}</p>
		</div>
	{/each}
</main>
