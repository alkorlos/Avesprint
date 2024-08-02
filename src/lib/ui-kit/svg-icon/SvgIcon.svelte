<svg
	class="svg-icon"
	class:svg-icon--desktop-hidden={desktopHidden}
	xmlns="http://www.w3.org/2000/svg"
	aria-hidden="true"
	{width}
	{height}
	{viewBox}
	{fill}
	{stroke}
>
	{@html elements}
</svg>

<script>
	import ButtonContact from './assets/icons/button-contact.svg?raw';
	import ButtonPlay from './assets/icons/button-play.svg?raw';
	import Close from './assets/icons/close.svg?raw';
	import ContactsFacebook from './assets/icons/contacts-facebook.svg?raw';
	import ContactsInstagram from './assets/icons/contacts-instagram.svg?raw';
	import ContactsTelegram from './assets/icons/contacts-telegram.svg?raw';
	import HeroLinkArrow from './assets/icons/hero-link-arrow.svg?raw';
	import LogoFocus from './assets/icons/logo-focus.svg?raw';
	import Logo from './assets/icons/logo.svg?raw';
	import ModalStockBackground from './assets/icons/modal-stock-background.svg?raw';
	import SliderArrow from './assets/icons/slider-arrow.svg?raw';
	import StockButtonIcon from './assets/icons/stock-button-icon.svg?raw';

	const icons = {
		buttonContact: ButtonContact,
		buttonPlay: ButtonPlay,
		close: Close,
		contactsFacebook: ContactsFacebook,
		contactsInstagram: ContactsInstagram,
		contactsTelegram: ContactsTelegram,
		heroLinkArrow: HeroLinkArrow,
		logoFocus: LogoFocus,
		logo: Logo,
		modalStockBackground: ModalStockBackground,
		sliderArrow: SliderArrow,
		stockButtonIcon: StockButtonIcon
	};

	export let iconName;
	export let desktopHidden = undefined;

	const getIcon = icons[iconName];

	const width = getIcon.match(/<svg[^>]+width="([^"]+)"/)?.[1];
	const height = getIcon.match(/<svg[^>]+height="([^"]+)"/)?.[1];
	const viewBox = getIcon.match(/<svg[^>]+viewBox="([^"]+)"/)?.[1];
	const fill = getIcon.match(/<svg[^>]+fill="([^"]+)"/)?.[1];
	const stroke = getIcon.match(/<svg[^>]+stroke="([^"]+)"/)?.[1];
	const elements = getIcon
		.replace(/<svg[^>]+>/, '')
		.replace('</svg>', '');
</script>

<style src="./svg-icon.pcss"></style>
