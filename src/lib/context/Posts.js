import { setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

const posts = writable();
const POSTS_KEY = Symbol('POSTS');

export function setContextPosts () {
	return setContext(POSTS_KEY, posts);
}

export function getContextPosts () {
	return getContext(POSTS_KEY);
}
