<input
	class="input"
	class:input--invalid={!isInputValid}
	{id}
	{type}
	{placeholder}
	{name}
	{required}
	{autocomplete}
	aria-describedby={ariaDescribedby}
	bind:this={input}
	on:input={updateValidationStateInput}
	on:blur={updateValidationState}
	on:invalid|once={updateValidationState}
>

<script>
	export let id;
	export let type;
	export let placeholder;
	export let name;
	export let required = undefined;
	export let autocomplete = undefined;
	export let ariaDescribedby = undefined;
	export let onValidChange;

	let input;
	let isInputValid = true;

	function updateValidationState () {
		isInputValid = input.checkValidity();

		input.setAttribute('aria-invalid', String(!isInputValid));
	}

	function updateValidationStateInput () {
		if (input.hasAttribute('aria-invalid')) {
			updateValidationState();
		}
	}

	$:onValidChange(isInputValid);
</script>

<style src="./input.pcss"></style>
