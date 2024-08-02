<div class="form-item">
	<label class="form-item__label" class:visually-hidden={labelHidden} for={forName}>
		{@html label}
	</label>

	<slot {onValidChange}></slot>

	{#if !isValid}
		<p class="form-item__error" id={errorId}>{@html error}</p>
	{/if}
</div>

<script>
	export let forName;
	export { forName as for };
	export let label;
	export let labelHidden;
	export let error = undefined;
	export let errorId = undefined;

	let isValid;

	function onValidChange (elementValid) {
		isValid = elementValid;
	}
</script>

<style src="./form-item.pcss"></style>
