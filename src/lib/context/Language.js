import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

const language = writable('ru');
const LANGUAGE_KEY = Symbol('LANGUAGE');

export function setContextLanguage () {
	return setContext(LANGUAGE_KEY, language);
}

export function getContextLanguage () {
	return getContext(LANGUAGE_KEY);
}
