<button
	class="button-icon button-anchor button-anchor-icon--{size}"
	class:button-icon--aria-disabled-hidden={ariaDisabledHidden}
	aria-label={ariaLabel}
	data-navigation={dataNavigation}
>
	<SvgIcon {iconName} />
</button>

<script>
	import SvgIcon from '$lib/ui-kit/svg-icon/SvgIcon.svelte';

	export let size;
	export let ariaDisabledHidden = undefined;
	export let ariaLabel;
	export let dataNavigation = undefined;
	export let iconName;
</script>

<style src="./button-icon.pcss"></style>
