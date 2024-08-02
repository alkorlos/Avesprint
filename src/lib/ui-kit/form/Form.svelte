<form
	class="form"
	{action}
	method="POST"
	bind:this={form}
	on:submit|preventDefault={handleSubmit}
	use:enhance={useEnhance}
>
		<slot></slot>
</form>

<script>
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	export let action;
	export let handleResult;

	let form;
	let isFormValid = false;

	onMount(async () => {
		form.setAttribute('novalidate', '');
	});

	function handleSubmit (event) {
		const form = event.target;

		isFormValid = form.checkValidity();

		const firstInvalidFormItem = form.querySelector(':invalid');
		firstInvalidFormItem?.focus();
	}

	function useEnhance ({ cancel }) {
		if (!isFormValid) {
			cancel();
		}

		return ({ result }) => {
			handleResult = result;
		};
	}
</script>
