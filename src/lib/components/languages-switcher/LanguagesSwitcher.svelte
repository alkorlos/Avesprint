<div data-sveltekit-preload-data="off">
	{#each locales as locale}
		{#if $language !== locale.name}
			<a href={locale.href}
				class="languages-switcher"
			>
				{@html $tp.execute(locale.name)}
			</a>
		{/if}
	{/each}
</div>

<script>
	import { getContextLanguage } from '$lib/context/Language.js';
	import { getContextTypograf } from '$lib/context/Typograf.js';

	const language = getContextLanguage();
	const tp = getContextTypograf();

	const locales = [
		{ name: 'ru', href: '/' },
		{ name: 'en', href: '/en' }
	];
</script>

<style src="./languages-switcher.pcss"></style>
