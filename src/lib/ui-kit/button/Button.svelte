<button class="button" class:button--icon={iconName}>
	{#if iconName}
		<SvgIcon {iconName} />
	{/if}

	<span class="button__description">{label}</span>
</button>

<script>
	import SvgIcon from '$lib/ui-kit/svg-icon/SvgIcon.svelte';

	export let label;
	export let iconName = undefined;
</script>

<style src="./button.pcss"></style>
