import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

import Typograf from 'typograf';

const languages = {
	ru: ['ru', 'en-US'],
	en: ['en-US']
};

const typograf = writable();
const TYPOGRAF_KEY = Symbol('TYPOGRAF');

export function setContextTypograf () {
	return setContext(TYPOGRAF_KEY, typograf);
}

export function getContextTypograf () {
	return getContext(TYPOGRAF_KEY);
}

export function updateTypograf (lang) {
	const tp = new Typograf({ locale: languages[lang] });
	typograf.set(tp);
}
