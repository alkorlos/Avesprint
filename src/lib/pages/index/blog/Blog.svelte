{#if $posts && $language === 'ru'}
	<section class="section-blog" id="section-blog" style="--is: --section-blog;" aria-labelledby="blog-title">
		<div class="blog__header">
			<h2 class="blog__title" id="blog-title">
				{@html $tp.execute($_('index.blog__title'))}
				<a class="blog__title-link" href="https://medium.com/avesprint" target="_blank" rel="noopener">
					{@html $tp.execute($_('index.blog__title-link'))}
				</a>
			</h2>

			<div class="blog-slider__buttons blog-slider__buttons--desktop">
				<ButtonIcon
					iconName="sliderArrow"
					--svg-icon-fill="#0d1724"
					--svg-icon-transform-rotate="180deg"
					size="normal"
					ariaLabel={$_('common.slider__button--previous')}
					dataNavigation="blog-slider__button--previous"
				/>

				<ButtonIcon
					iconName="sliderArrow"
					--svg-icon-fill="#0d1724"
					size="normal"
					ariaLabel={$_('common.slider__button--next')}
					dataNavigation="blog-slider__button--next"
				/>
			</div>
		</div>

		<div class="blog-slider__wrapper">
			<swiper-container class="blog-slider__container" init="false" bind:this={swiperEl}>
				{#each $posts.slice(0, postLimit) as post}
					<swiper-slide class="blog-slider__slide">
						<img src={post.imgSrc} class="blog-slider__image" alt={post.imgAlt} loading="lazy">

						<h3 class="blog-slider__title">
							<a class="blog-slider__link" href={post.link} target="_blank" rel="noopener">
								{$tp.execute(post.title)}
							</a>
						</h3>
						<p class="blog-slider__description">{$tp.execute(post.description)}</p>
					</swiper-slide>
				{/each}
			</swiper-container>

			<div class="blog-slider__buttons blog-slider__buttons--mobile">
				<div class="blog-slider__button-wrapper">
					<ButtonIcon
						iconName="sliderArrow"
						--svg-icon-fill="#0d1724"
						--svg-icon-transform-rotate="180deg"
						size="normal"
						ariaLabel={$_('common.slider__button--previous')}
						dataNavigation="blog-slider__button--previous"
						ariaDisabledHidden="true"
					/>
				</div>

				<div class="blog-slider__button-wrapper">
					<ButtonIcon
						iconName="sliderArrow"
						--svg-icon-fill="#0d1724"
						size="normal"
						ariaLabel={$_('common.slider__button--next')}
						dataNavigation="blog-slider__button--next"
						ariaDisabledHidden="true"
					/>
				</div>
			</div>
		</div>
	</section>
{/if}

<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import { _ } from 'svelte-i18n';
	import { XMLParser } from 'fast-xml-parser';
	import { register } from 'swiper/element/bundle';

	import { getContextLanguage } from '$lib/context/Language.js';
	import { getContextPosts } from '$lib/context/Posts.js';
	import { getContextTypograf } from '$lib/context/Typograf.js';

	import ButtonIcon from '$lib/ui-kit/button-icon/ButtonIcon.svelte';

	const language = getContextLanguage();
	const posts = getContextPosts();
	const tp = getContextTypograf();

	let data;
	let swiperEl;
	const postLimit = 10;

	onMount(async () => {
		if ($language === 'ru') {
			const response = await fetch('/api/posts');
			data = await response.json();

			if (data?.data) {
				const parserXML = new XMLParser();
				const feed = parserXML.parse(data.data);
				$posts = feed.rss.channel.item;

				if (browser) {
					for (let i = 0; i < $posts.length && i < 10; i++) {
						const post = $posts[i]['content:encoded'];

						const imgSrc = post.match(/<img.*?src=["|'](.*?)["|']/)[1];
						$posts[i].imgSrc = `/api/image?url=${encodeURIComponent(imgSrc)}`;

						const imgAlt = post.match(/<img.*?alt=["|'](.*?)["|']/)[1];
						$posts[i].imgAlt = imgAlt;

						const description = post.match(/<p>(.*?)<\/p>/).map(tag => tag.replace(/<[^>]+>/g, ''))[1];
						$posts[i].description = description;

						// no width and height at medium blog
					}
				}
			}
		}
	});

	$: if (swiperEl) {
		register();

		const swiperParams = {
			slidesPerView: 'auto',
			spaceBetween: 16,
			centeredSlides: true,
			navigation: {
				prevEl: '[data-navigation="blog-slider__button--previous"]',
				nextEl: '[data-navigation="blog-slider__button--next"]'
			},
			a11y: {
				prevSlideMessage: $_('common.slider__button--previous'),
				nextSlideMessage: $_('common.slider__button--next')
			},
			breakpoints: {
				576: {
					centeredSlides: false
				}
			}
		};

		Object.assign(swiperEl, swiperParams);
		swiperEl.initialize();
	}
</script>

<style src="./blog.pcss"></style>
