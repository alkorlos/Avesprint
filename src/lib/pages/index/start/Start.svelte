<section class="section-start" id="section-start" style="--is: --section-start;" aria-labelledby="start-title">
	<div class="start__header">
		<h2 class="start__title" id="start-title">
			{@html $tp.execute($_('index.start__title--1.1'))}
			<span class="start__company-name">
				{@html $tp.execute($_('index.start__company-name'))}
			</span>
			{#if $_('index.start__title--1.2') !== 'index.start__title--1.2'}
				{@html $tp.execute($_('index.start__title--1.2'))}
			{/if}
		</h2>

		<p class="start__description">{@html $tp.execute($_('index.start__description'))}</p>
	</div>

	<div class="start__picture-wrapper">
		<picture class="start__picture">
			<source
				srcset={startWebp + ' 1x, ' + start2xWebp + ' 2x'}
				type="image/webp"
			>
			<img
				src={startJpg}
				srcset={start2xJpg + ' 2x'}
				class="start__image"
				width="1920"
				height="1475"
				alt={$_('index.start__image')}
				loading="lazy"
			>
		</picture>
	</div>
</section>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import startWebp from './assets/images/start.webp';
	import start2xWebp from './assets/images/start@2x.webp';
	import startJpg from './assets/images/start.jpg';
	import start2xJpg from './assets/images/start@2x.jpg';

	const tp = getContextTypograf();
</script>

<style src="./start.pcss"></style>
