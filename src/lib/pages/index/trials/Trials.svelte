<section class="section-trials" id="section-trials" style="--is: --section-trials;" aria-labelledby="trials-title">
	<div class="section-trials__root">
		<div class="trials__header">
			<h2 class="trials__title" id="trials-title">
				{@html $tp.execute($_('index.trials__title'))}
			</h2>
			<a class="trials__skip" href="#section-reward">
				{@html $tp.execute($_('index.trials__skip'))}
			</a>
		</div>

		<div class="trials-gallery">
			<div class="trials-gallery__weeks">
				{#each weeks as week, i}
					<div
						class="trials-gallery__week"
						class:trials-gallery__week--current={week.days.map(day => day.target).includes(slideVisibleName)}
					>
						<p class="trials-gallery__week-name">
							{@html $tp.execute($_(`index.trials-gallery__week--${i + 1}`))}
						</p>
						<div class="trials-gallery__controls">
							{#each week.days as day}
								<div
									class="trials-gallery__control"
									class:trials-gallery__control--current={day.target === slideVisibleName}
								>
									<p class="trials-gallery__day trials-gallery__day--desktop">
										{@html $tp.execute($_(`index.trials-gallery__day--${day.name}--full`))}
									</p>
									<p class="trials-gallery__day trials-gallery__day--mobile">
										{@html $_(`index.trials-gallery__day--${day.name}--shortcut`)}
									</p>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>

			<div class="trials-slider">
				{#each slides as slide}
					<SlideObserver name={slide.name} bind:slideVisible={slideVisibleName}>
						{#if getWeekForFirstSlide(slide)}
							<p class="trials-slider__week-name">
								{@html $tp.execute($_(`index.trials-gallery__week--${getSlideWeekNumber(slide)}`))}
							</p>
						{/if}
						<div class="trials-slider__slide">
							<div class="trials-slider__content">
								<h3 class="trials-slider__title">
									{@html $tp.execute($_(`index.trials-slider__title--${slide.name}`))}
								</h3>
								<ul class="trials-slider__list">
									{#each slide.items as item}
										<li class="trials-slider__item">
											{@html $tp.execute($_(`index.trials-slider__item--${slide.name}--${item}`))}
										</li>
									{/each}
								</ul>
							</div>
							<div class="trials-slider__aside">
								<img
									src={slide.imageName}
									class="trials-slider__image"
									width={slide.imageWidth}
									height={slide.imageHeight}
									alt={$_(`index.trials-slider__image--${slide.name}`)}
									loading="lazy"
								>
							</div>
						</div>
					</SlideObserver>
				{/each}
			</div>
		</div>
	</div>
</section>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import SlideObserver from '$lib/components/slide-observer/SlideObserver.svelte';

	import ideaSvg from './assets/images/idea.svg';
	import storyboardSvg from './assets/images/storyboard.svg';
	import prototypingSvg from './assets/images/prototyping.svg';
	import testingSvg from './assets/images/testing.svg';
	import analysisSvg from './assets/images/analysis.svg';
	import updateSvg from './assets/images/update.svg';
	import prototyping2Svg from './assets/images/prototyping-2.svg';
	import testing2Svg from './assets/images/testing-2.svg';

	const tp = getContextTypograf();

	let slideVisibleName;

	const getWeekForFirstSlide = slide => weeks.findIndex(week => week.days[0]?.target === slide.name) + 1;

	const getSlideWeekNumber = slide => weeks.findIndex(week => week.days.find(day => day.target === slide.name)) + 1;

	const weeks = [
		{
			days: [
				{ name: 'monday', target: 'idea' },
				{ name: 'tuesday', target: 'storyboard' },
				{ name: 'wednesday', target: 'prototyping' },
				{ name: 'thursday', target: 'testing' },
				{ name: 'friday', target: 'analysis' }
			]
		},
		{
			days: [
				{ name: 'monday', target: 'update' },
				{ name: 'tuesday-thursday', target: 'prototyping-2' },
				{ name: 'friday', target: 'testing-2' }
			]
		}
	];

	const slides = [
		{ name: 'idea', imageName: ideaSvg, imageWidth: 433, imageHeight: 456, items: ['study', 'solutions', 'hypotheses'] },
		{ name: 'storyboard', imageName: storyboardSvg, imageWidth: 433, imageHeight: 456, items: ['prototype', 'scripts', 'mockups'] },
		{ name: 'prototyping', imageName: prototypingSvg, imageWidth: 320, imageHeight: 377, items: ['prototype', 'finalize'] },
		{ name: 'testing', imageName: testingSvg, imageWidth: 494, imageHeight: 368, items: ['real-users', 'film-process'] },
		{ name: 'analysis', imageName: analysisSvg, imageWidth: 396, imageHeight: 410, items: ['process', 'track-record', 'plan'] },
		{ name: 'update', imageName: updateSvg, imageWidth: 469, imageHeight: 345, items: ['review', 'sprint', 'solutions'] },
		{ name: 'prototyping-2', imageName: prototyping2Svg, imageWidth: 460, imageHeight: 418, items: ['prototype', 'finalize'] },
		{ name: 'testing-2', imageName: testing2Svg, imageWidth: 423, imageHeight: 420, items: ['real-users', 'roadmap'] }
	];
</script>

<style src="./trials.pcss"></style>
