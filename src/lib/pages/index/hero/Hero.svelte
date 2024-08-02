<section class="section-hero" id="section-hero" aria-labelledby="hero-title">
	<h1 class="hero__caption visually-hidden" id="hero-title">
		{@html $tp.execute($_('index.hero__caption'))}
	</h1>

	<div class="hero__body">
		<div class="hero__tile">
			<swiper-container
				class="hero-slider__container"
				slides-per-view="1"
				space-between="40"
				loop="true"
				autoplay-delay="4000"
			>
				{#each slides as slide}
					<swiper-slide class="hero-slider__slide">
						<h2 class="hero-slider__title">
							{@html $tp.execute($_(`index.hero-slider__title--${slide.name}`))}
						</h2>
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>

		<div class="hero__image-wrapper hero__tile">
			<img
				src={heroSvg}
				class="hero__image"
				width="577"
				height="376"
				alt={$_('index.hero__image')}
			>
		</div>

		<div class="hero__buttons hero__buttons--{$language} hero__tile">
			<!-- {#if $language === 'ru'}
				<Button label={$_('index.hero__button')} iconName="buttonPlay" />
			{/if} -->

			<!-- {#if $language === 'en'} -->
				<AnchorIcon
					iconName="heroLinkArrow"
					href="#section-challenge"
					size="medium"
					ariaLabel="{$_('index.hero__link')}"
				/>
			<!-- {/if} -->
		</div>
	</div>
</section>

<script>
	import { _ } from 'svelte-i18n';
	import { register } from 'swiper/element/bundle';

	import { getContextLanguage } from '$lib/context/Language.js';
	import { getContextTypograf } from '$lib/context/Typograf.js';

	// import Button from '$lib/ui-kit/button/Button.svelte';
	import AnchorIcon from '$lib/ui-kit/anchor-icon/AnchorIcon.svelte';

	import heroSvg from './assets/images/hero.svg';

	const language = getContextLanguage();
	const tp = getContextTypograf();

	register();

	const slides = [
		{ name: 'period' },
		{ name: 'practical' },
		{ name: 'prototype' },
		{ name: 'products' },
		{ name: 'saving' },
		{ name: 'result' }
	];
</script>

<style src="./hero.pcss"></style>
