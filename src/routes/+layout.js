import { locale, waitLocale } from 'svelte-i18n';

import '$lib/i18n/index.js';

export const load = async ({ url }) => {
	const { pathname } = url;
	const lang = `${pathname.match(/\w+?(?=\/|$)/) || 'ru'}`;

	locale.set(lang);

	await waitLocale();

	return {
		lang: lang
	};
};

export const prerender = true;
