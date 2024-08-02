<section class="section-clients" id="section-clients" aria-labelledby="clients-title">
	<h2 class="clients__title visually-hidden" id="clients-title">
		{@html $tp.execute($_('index.clients__title'))}
	</h2>

	<swiper-container class="clients-slider__container"
		slides-per-view="auto"
		space-between="110"
		loop="true"
		autoplay-delay="0"
		speed="3500"
	>
		{#each clients as client}
			<swiper-slide class="clients-slider__slide">
				<img
					src={client.imageName}
					class="clients-slider__image"
					width={client.imageWidth}
					height={client.imageHeight}
					alt={$_(`index.clients-slider__image--${client.name}`)}
					loading="lazy"
				>
			</swiper-slide>
		{/each}
	</swiper-container>
</section>

<script>
	import { _ } from 'svelte-i18n';
	import { register } from 'swiper/element/bundle';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import sberbankSvg from './assets/images/sberbank.svg';
	import tele2Svg from './assets/images/tele2.svg';
	import deliveryClubSvg from './assets/images/delivery-club.svg';
	import mtsSvg from './assets/images/mts.svg';
	import okkoSvg from './assets/images/okko.svg';
	import rosbankSvg from './assets/images/rosbank.svg';
	import sberSolutionsSvg from './assets/images/sber-solutions.svg';
	import ramblerSvg from './assets/images/rambler.svg';
	import openSvg from './assets/images/open.svg';
	import chelpipeSvg from './assets/images/chelpipe.svg';

	const tp = getContextTypograf();

	register();

	const clients = [
		{ name: 'sberbank', imageName: sberbankSvg, imageWidth: 170, imageHeight: 34 },
		{ name: 'tele2', imageName: tele2Svg, imageWidth: 100, imageHeight: 38 },
		{ name: 'delivery-club', imageName: deliveryClubSvg, imageWidth: 129, imageHeight: 42 },
		{ name: 'mts', imageName: mtsSvg, imageWidth: 179, imageHeight: 24 },
		{ name: 'okko', imageName: okkoSvg, imageWidth: 96, imageHeight: 35 },
		{ name: 'rosbank', imageName: rosbankSvg, imageWidth: 198, imageHeight: 39 },
		{ name: 'sber-solutions', imageName: sberSolutionsSvg, imageWidth: 238, imageHeight: 25 },
		{ name: 'rambler', imageName: ramblerSvg, imageWidth: 165, imageHeight: 36 },
		{ name: 'open', imageName: openSvg, imageWidth: 236, imageHeight: 46 },
		{ name: 'chelpipe', imageName: chelpipeSvg, imageWidth: 172, imageHeight: 53 }
	];
</script>

<style src="./clients.pcss"></style>
