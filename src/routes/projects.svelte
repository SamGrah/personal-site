<script>
	const ariaSrc = './aria.png';
	const httpBinSrc = './httpBin.png';
	const scalePic = 'transition-all ease-in duration-300 hover:scale-[1.01] hover:drop-shadow-2xl';
</script>

<div class="flex flex-grow w-prose">
	<div class="flex flex-wrap mx-auto gap-x-16 gap-y-4 place-content-evenly">
		<div class="w-72 pt-5 flex flex-col rounded-2xl">
			<a href="https://aria-deploy.github.io/">
				<img class="rounded-2xl {scalePic}" alt="aria demo" src={ariaSrc} />
			</a>
			<p class="text-gray-600 pl-6 pr-3 text-[15px]">
				<a class="italic font-bold" href="https://aria-deploy.github.io/"> aria </a>
				is a tool that automates canary deployments apps to AWS, including monitoring. Not much going
				on with this project.
			</p>
		</div>
		<div class="w-72 flex flex-col items-center rounded-2xl">
			<a href="https://github.com/SamGrah/httpBin">
				<img class="w-[14.65rem] pt-5 {scalePic}" alt="httpBin homepage" src={httpBinSrc} />
			</a>
			<p class="text-gray-600 pl-8 text-[15px]">
				<a class="italic font-bold" href="https://github.com/SamGrah/httpBin"> httpBin </a>
				is a webhook testing app utilizing websockets. Currently migrating to SvelteKit, this project
				is fodder for learning new tooling.
			</p>
		</div>
	</div>
</div>
