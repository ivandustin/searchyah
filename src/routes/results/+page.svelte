<script>
	export let data;
</script>

<main class="m-10">
	{#each data.items as item}
		<div class="my-20">
			<p class="my-5 text-blue-500 tracking-widest">
				<a href={item.href}>{item.reference}</a>
			</p>
			<p class="font-serif leading-10 text-2xl">{item.text}</p>
		</div>
	{/each}
</main>
