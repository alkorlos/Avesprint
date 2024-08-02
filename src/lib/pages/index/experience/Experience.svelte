<section class="section-experience" id="section-experience" style="--is: --section-experience;" aria-labelledby="experience-title">
	<h2 class="experience__title" id="experience-title">
		{@html $tp.execute($_('index.experience__title'))}
	</h2>

	<div class="experience-slider__wrapper">
		<swiper-container class="experience-slider__container" init="false" bind:this={swiperEl}>
			{#each slides as slide}
				<swiper-slide class="experience-slider__slide">
					<div class="experience-slider__header">
						{#if 'svg' in slide.logoNames}
							<img
								src={slide.logoNames.svg}
								class="experience-slider__logo"
								width={slide.logoWidth}
								height={slide.logoHeight}
								alt={$_(`index.experience-slider__logo--${slide.name}`)}
								loading="lazy"
							>
						{:else}
							<picture class="experience-slider__logo-picture">
								<source
									srcset={slide.logoNames.webp + ' 1x, ' + slide.logoNames.webp2x + ' 2x'}
									type="image/webp"
								>
								<img
									src={slide.logoNames.png}
									srcset={slide.logoNames.png2x + ' 2x'}
									class="experience-slider__logo"
									width={slide.logoWidth}
									height={slide.logoHeight}
									alt={$_(`index.experience-slider__logo--${slide.name}`)}
									loading="lazy"
								>
							</picture>
						{/if}
					</div>

					<div class="experience-slider__body">
						<div class="experience-slider__content">
							<h3 class="experience-slider__title">
								{@html $tp.execute($_('index.experience-slider__title--task'))}
							</h3>
							<p class="experience-slider__description">
								{@html $tp.execute($_(`index.experience-slider__description--task--${slide.name}`))}
							</p>

							<h3 class="experience-slider__title">
								{@html $tp.execute($_('index.experience-slider__title--outcome'))}
							</h3>
							<p class="experience-slider__description">
								{@html $tp.execute($_(`index.experience-slider__description--outcome--${slide.name}`))}
							</p>
						</div>
						<div class="experience-slider__aside">
							<picture class="experience-slider__picture">
								<source
									srcset={slide.imageNames.webp + ' 1x, ' + slide.imageNames.webp2x + ' 2x'}
									type="image/webp"
								>
								<img
									src={slide.imageNames.jpg}
									srcset={slide.imageNames.jpg + ' 2x'}
									class="experience-slider__image"
									width={slide.imageWidth}
									height={slide.imageHeight}
									alt={$_(`index.experience-slider__image--${slide.name}`)}
									loading="lazy"
								>
							</picture>
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>

		<div class="experience-slider__buttons">
			<div class="experience-slider__button-wrapper">
				<ButtonIcon
					iconName="sliderArrow"
					--svg-icon-fill="#0d1724"
					--svg-icon-transform-rotate="180deg"
					size="normal"
					ariaLabel={$_('common.slider__button--previous')}
					dataNavigation="experience-slider__button--previous"
					ariaDisabledHidden="true"
				/>
			</div>

			<div class="experience-slider__button-wrapper">
				<ButtonIcon
					iconName="sliderArrow"
					--svg-icon-fill="#0d1724"
					size="normal"
					ariaLabel={$_('common.slider__button--next')}
					dataNavigation="experience-slider__button--next"
					ariaDisabledHidden="true"
				/>
			</div>
		</div>
	</div>
</section>

<script>
	import { onMount } from 'svelte';

	import { _ } from 'svelte-i18n';
	import { register } from 'swiper/element/bundle';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import ButtonIcon from '$lib/ui-kit/button-icon/ButtonIcon.svelte';

	import gazpromNeftLogoWebp from './assets/images/gazprom-neft-logo.webp';
	import gazpromNeftLogo2xWebp from './assets/images/gazprom-neft-logo@2x.webp';
	import gazpromNeftLogoPng from './assets/images/gazprom-neft-logo.png';
	import gazpromNeftLogo2xPng from './assets/images/gazprom-neft-logo@2x.png';
	import gazpromNeftWebp from './assets/images/gazprom-neft.webp';
	import gazpromNeft2xWebp from './assets/images/gazprom-neft@2x.webp';
	import gazpromNeftJpg from './assets/images/gazprom-neft.jpg';
	import gazpromNeft2xJpg from './assets/images/gazprom-neft@2x.jpg';
	import NDALogoSvg from './assets/images/NDA-logo.svg';
	import NDAWebp from './assets/images/NDA.webp';
	import NDA2xWebp from './assets/images/NDA@2x.webp';
	import NDAJpg from './assets/images/NDA.jpg';
	import NDA2xJpg from './assets/images/NDA@2x.jpg';
	import molniaLogoWebp from './assets/images/molnia-logo.webp';
	import molniaLogo2xWebp from './assets/images/molnia-logo@2x.webp';
	import molniaLogoPng from './assets/images/molnia-logo.png';
	import molniaLogo2xPng from './assets/images/molnia-logo@2x.png';
	import molniaWebp from './assets/images/molnia.webp';
	import molnia2xWebp from './assets/images/molnia@2x.webp';
	import molniaJpg from './assets/images/molnia.jpg';
	import molnia2xJpg from './assets/images/molnia@2x.jpg';

	const tp = getContextTypograf();

	register();

	let swiperEl;

	onMount(() => {
		if (swiperEl !== undefined) {
			const swiperParams = {
				slidesPerView: 1,
				spaceBetween: 40,
				navigation: {
					prevEl: '[data-navigation="experience-slider__button--previous"]',
					nextEl: '[data-navigation="experience-slider__button--next"]'
				},
				pagination: {
					type: 'bullets',
					clickable: true
				},
				// injectStylesUrls: ['src/lib/pages/index/experience/swiper-inject-styles.css'],
				injectStyles: [
					`
					.swiper-pagination-current {
						margin-inline-end: 3px;

						color: #0c1724;
						font-weight: 500;
						font-size: 24px;
					}

					.swiper-pagination-total {
						margin-inline-start: 1px;
					}
					`
				],
				a11y: {
					prevSlideMessage: $_('common.slider__button--previous'),
					nextSlideMessage: $_('common.slider__button--next'),
					paginationBulletMessage: $_('common.slider__pagination-bullet') + '{{index}}'
				},
				breakpoints: {
					993: {
						pagination: {
							type: 'fraction'
						}
					}
				}
			};

			Object.assign(swiperEl, swiperParams);
			swiperEl.initialize();
		}
	});

	const slides = [
		{
			name: 'gazprom-neft',
			logoNames: {
				webp: gazpromNeftLogoWebp,
				webp2x: gazpromNeftLogo2xWebp,
				png: gazpromNeftLogoPng,
				png2x: gazpromNeftLogo2xPng
			},
			logoWidth: 156,
			logoHeight: 77,
			imageNames: {
				webp: gazpromNeftWebp,
				webp2x: gazpromNeft2xWebp,
				jpg: gazpromNeftJpg,
				jpg2x: gazpromNeft2xJpg
			},
			imageWidth: 532,
			imageHeight: 309
		},
		{
			name: 'NDA',
			logoNames:
				{
					svg: NDALogoSvg
				},
			logoWidth: 125,
			logoHeight: 38,
			imageNames: {
				webp: NDAWebp,
				webp2x: NDA2xWebp,
				jpg: NDAJpg,
				jpg2x: NDA2xJpg
			},
			imageWidth: 531,
			imageHeight: 309
		},
		{
			name: 'molnia',
			logoNames:
				{
					webp: molniaLogoWebp,
					webp2x: molniaLogo2xWebp,
					fallback: molniaLogoPng,
					png2x: molniaLogo2xPng
				},
			logoWidth: 320,
			logoHeight: 40,
			imageNames: {
				webp: molniaWebp,
				webp2x: molnia2xWebp,
				jpg: molniaJpg,
				jpg2x: molnia2xJpg
			},
			imageWidth: 531,
			imageHeight: 309
		}
	];
</script>

<style src="./experience.pcss"></style>
