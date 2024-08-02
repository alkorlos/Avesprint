<footer class="footer">
	<div class="footer__content">
		<p class="footer__copyright">{@html $tp.execute($_('common.footer__copyright')) } {currentYear}</p>

		<div class="footer__social-networks">
			{#each socialNetworks as socialNetwork}
				<a
					href={socialNetwork.href}
					class="footer__social-network"
					target="_blank"
					rel="noopener"
					aria-label={socialNetwork.name}
				>
					<SvgIcon iconName={`contacts${socialNetwork.name}`} --svg-icon-fill="#001935" />
				</a>
			{/each}
		</div>
	</div>
</footer>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import SvgIcon from '$lib/ui-kit/svg-icon/SvgIcon.svelte';

	const tp = getContextTypograf();

	const date = new Date();
	const currentYear = date.getFullYear();

	const socialNetworks = [
		{ name: 'Telegram', href: 'https://t.me/focus_design' },
		{ name: 'Facebook', href: 'https://www.facebook.com/focusdesignsprint/' },
		{ name: 'Instagram', href: 'https://www.instagram.com/focus_designsprint/' }
	];
</script>

<style src="./footer.pcss"></style>
