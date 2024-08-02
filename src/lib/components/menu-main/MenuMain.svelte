<nav class="menu-main" class:menu-main--open={$menuOpen}>
	<ul class="menu-main__elements">
		{#each menuElements as menuElement}
			{#if !menuElement.requiresPostsRu || ($posts && $language === 'ru')}
				<li class="menu-main__element">
					<a
						class="menu-main__link"
						href="#section-{menuElement.name}"
						style="--for: --section-{menuElement.name};"
						on:click={() => ($menuOpen = false)}
					>
						{@html $tp.execute($_(`common.menu-main__link--${menuElement.name}`))}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextLanguage } from '$lib/context/Language.js';
	import { getContextPosts } from '$lib/context/Posts.js';
	import { getContextTypograf } from '$lib/context/Typograf.js';

	export let menuOpen;

	const language = getContextLanguage();
	const posts = getContextPosts();
	const tp = getContextTypograf();

	const menuElements = [
		{ name: 'challenge', requiresPostsRu: false },
		{ name: 'trials', requiresPostsRu: false },
		{ name: 'reward', requiresPostsRu: false },
		{ name: 'experience', requiresPostsRu: false },
		{ name: 'start', requiresPostsRu: false },
		{ name: 'blog', requiresPostsRu: true }
	];
</script>

<style src="./menu-main.pcss"></style>
