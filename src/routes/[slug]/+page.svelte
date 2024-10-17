<script>
	export let data;
</script>

<main class="m-10 font-serif leading-10 text-2xl">
	{#each data.records as record}
		<p id={record.verse} class="my-10">
			<sup class="font-sans text-xs select-none text-gray-400">{record.verse}&nbsp;</sup
			>{record.text}
		</p>
	{/each}
</main>
