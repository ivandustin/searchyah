<main class="text-center flex items-center justify-center h-screen">
	<div class="m-10 max-w-screen-md mt-[calc(61.8vh-224px/2)]">
		<form
			class="rounded-lg p-3 flex mb-16 bg-gray-100 dark:bg-gray-700"
			action="results"
			method="GET"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-gray-500"
				stroke="currentColor"
				viewBox="0 0 24 24"
				stroke-width="2"
				fill="none"
			>
				<path
					d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
					stroke-linejoin="round"
					stroke-linecap="round"
				/>
			</svg>
			<input
				class="flex-grow outline-none bg-transparent placeholder:text-gray-500 mx-2"
				enterkeyhint="search"
				placeholder="Search"
				type="search"
				name="query"
				autofocus
				required
			/>
		</form>
		<h2 class="text-xs w-3/5 m-auto leading-7 text-gray-400">
			Search the Bible in your language, and you'll get results in the King James Version (KJV).
		</h2>
	</div>
</main>
