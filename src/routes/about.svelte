<script>
	import GithubIcon from '../components/Icons/GithubIcon.svelte';
	import LinkedIn from '../components/Icons/LinkedInIcon.svelte';
	import ResumeIcon from '../components/Icons/ResumeIcon.svelte';
</script>

<div class="flex-col w-[30%] mx-auto">
	<img
		class="rounded-full border-2 border-gray-100 drop-shadow-md"
		src="./pic.jpeg"
		alt="photo of Sam Graham"
	/>
	<div class="mx-auto pt-7 flex justify-between">
		<a href="https://github.com/SamGrah" target="_blank">
			<svelte:component this={GithubIcon} />
		</a>
		<a href="https://www.linkedin.com/in/samgr" target="_blank">
			<svelte:component this={LinkedIn} />
		</a>
		<a href="./resume.pdf" target="_blank">
			<svelte:component this={ResumeIcon} />
		</a>
	</div>
</div>
<div class="text-gray-700 w-[65%] mx-auto pl-12 pt-10 space-y-2">
	<p>
		My name is Sam Graham and I currently write backend software out of my command center in Boston,
		MA.<br />
	</p>
	<div>
		<p>
			This is my personal site. My own home away from home on the internets. Off the clock,
			you'll find me:
		</p>
		<ul class="pl-7 pt-1 text-gray-600 font-light italic tracking-wide list-disc">
			<li>
				dancing <a
					class="font-semibold"
					href="https://www.youtube.com/watch?v=qTcuxuMxNQs&t=38s"
					target="_blank">Argentine Tango</a
				>
			</li>
			<li>playing video games</li>
			<li>coding stuff like this site</li>
		</ul>
	</div>
</div>
