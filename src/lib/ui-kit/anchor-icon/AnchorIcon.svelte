<a
	class="anchor-icon button-anchor-icon button-anchor-icon--{size}"
	href={href}
	aria-label={ariaLabel}
>
	<SvgIcon {iconName} />
</a>

<script>
	import SvgIcon from '$lib/ui-kit/svg-icon/SvgIcon.svelte';

	export let size;
	export let href;
	export let ariaLabel;
	export let iconName;
</script>

<style src="./anchor-icon.pcss"></style>
