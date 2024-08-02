import { init, register } from 'svelte-i18n';

const defaultLocale = 'ru';

register('ru', async () => (await import('./locales/ru/index.js')).ruLocale);
register('en', async () => (await import('./locales/en/index.js')).enLocale);

init({
	fallbackLocale: defaultLocale,
	initialLocale: defaultLocale
});
