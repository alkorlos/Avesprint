<svelte:head>
	<meta name="description" content={$_('common.meta-description')}>
</svelte:head>

<Inspections />

<div
	class="wrapper"
	style="
		--scopes:
			--section-challenge,
			--section-trials,
			--section-reward,
			--section-experience,
			--section-start,
			--section-blog;"
>
	<Header />

	<slot />

	<Footer />
</div>

<script>
	import { _ } from 'svelte-i18n';

	import { setContextLanguage, getContextLanguage } from '$lib/context/Language.js';
	import { setContextPosts } from '$lib/context/Posts.js';
	import { setContextTypograf, updateTypograf } from '$lib/context/Typograf.js';

	import Inspections from '$lib/components/inspections/Inspections.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	export let data;

	setContextLanguage();
	const language = getContextLanguage();
	$: $language = data.lang || 'ru';

	setContextPosts();

	setContextTypograf();
	$: updateTypograf(data.lang);
</script>

<style src="./layout.pcss"></style>
