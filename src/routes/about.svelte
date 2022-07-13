<!-- <svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
	<link rel="manifest" href="public/favicons/site.webmanifest" />
	<link rel="mask-icon" href="public/favicons/safari-pinned-tab.svg" color="#5bbad5" />
	<link rel="shortcut icon" href="public/favicons/favicon.ico" />
</svelte:head> -->

<div class="logo-links">
	<a href="https://github.com/SamGrah" target="_blank">
		<img class="icon" src="./git_hub.svg" alt="github logo" id="github-logo" />
	</a>
	<a href="./resume.pdf" target="_blank">
		<img
			class="icon"
			src="./resume.svg"
			alt="link to Sam Graham resume"
			id="resume-logo"
		/>
	</a>
	<a href="https://www.linkedin.com/in/samgr" target="_blank">
		<img
			class="icon"
			src="./linked_in.svg"
			alt="link to Sam Graham LinkedIn"
			id="linkedin-logo"
		/>
	</a>
</div>
<main>
	<section id="intro" class="flexbox horz-center">
		<img
			id="avatar"
			class="profile"
			src="./pic.jpeg"
			alt="photo of Sam Graham"
		/>
		<h1 class="profile-name">Sam Graham</h1>
		<p class="intro-p-1">
			I'm a full stack software engineer from Boston, MA with experience in Node.js, TypeScript,
			Python, Go, PostgreSQL, Docker, and AWS.
		</p>
		<p class="intro-p-2">
			I recently built <a class="aria" href="https://aria-deploy.github.io/"
				><strong>Aria</strong></a
			>, an open source, self-hosted canary deployment analysis tool.
		</p>
	</section>
</main>
