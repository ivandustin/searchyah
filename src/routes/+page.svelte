<script lang="ts">
	import Search from '$lib/components/Search.svelte';
	import description from './description.txt?raw';
</script>

<svelte:head>
	<title>Bible Search – Searchyah</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="mx-auto max-w-screen-md">
	<div class="h-dvh text-center flex flex-col">
		<div class="h-[76.4dvh] flex flex-col justify-center">
			<h1 class="font-serif text-4xl">Searchyah</h1>
			<p class="m-10 text-xs text-gray-500">
				{description}
			</p>
		</div>
		<div class="mx-10 -translate-y-1/2">
			<Search />
		</div>
	</div>
</main>
