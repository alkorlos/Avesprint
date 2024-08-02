<div class="form-container">
	{#if actionResult === undefined}
		<Form
			{action}
			bind:handleResult={actionResult}
		>
			<slot></slot>
		</Form>
	{:else if actionResult?.type === 'success'}
		<p class="form-container__message form-container__message--success">
			{@html messageSuccess}
		</p>
	{:else if actionResult?.type === 'failure'}
		<p class="form-container__message form-container__message--failure">
			{@html messageFailure}
		</p>
	{/if}
</div>

<script>
	import Form from '$lib/ui-kit/form/Form.svelte';

	export let action;
	export let messageSuccess;
	export let messageFailure;

	let actionResult;
</script>

<style src="./form-container.pcss"></style>
