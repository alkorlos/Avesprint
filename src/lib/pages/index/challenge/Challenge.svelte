<section class="section-challenge" id="section-challenge" style="--is: --section-challenge;" aria-labelledby="challenge-title">
	<h2 class="challenge__title" id="challenge-title">
		{@html $tp.execute($_('index.challenge__title'))}
	</h2>

	<div class="challenge-summary-detail challenge-summary-detail--desktop">
		<div class="challenge-summary-detail__summaries">
			{#each details as detail}
				<h2 class="challenge-summary-detail__summary">
					<button class="challenge-summary-detail__button"
						class:challenge-summary-detail__button--active={openSummaryDetail === detail.name}
						aria-expanded={openSummaryDetail === detail.name}
						aria-controls="challenge-summary-detail__detail--{detail.name}"
						on:mouseenter={() => handleToggle(detail.name)}
						on:focus={() => handleToggle(detail.name)}
					>
						{@html $tp.execute($_(`index.challenge-details__title--${detail.name}`))}
					</button>
				</h2>
			{/each}
		</div>
		<div class="challenge-summary-detail__details">
			{#each details as detail}
				<div
					class="challenge-summary-detail__detail"
					class:challenge-summary-detail__detail--open={openSummaryDetail === detail.name}
					id="challenge-summary-detail__detail--{detail.name}"
				>
					<img
						src={detail.imageName}
						class="challenge-summary-detail__image"
						width={detail.imageWidth}
						height={detail.imageHeight}
						alt={$_(`index.challenge-summary-detail__image--${detail.name}`)}
					>
					<p class="challenge-summary-detail__description">
						{@html $tp.execute($_(`index.challenge-details__description--${detail.name}`))}
					</p>
				</div>
			{/each}
		</div>
	</div>

	<div class="challenge-details-wrapper--mobile">
		{#each details as detail}
			<Details open={isFirstDetails(detail, details)} --summary-content="minmax(auto, max-content)">
				<svelte:fragment slot="summary">
					<h2 class="challenge-details__title">
						{@html $tp.execute($_(`index.challenge-details__title--${detail.name}`))}
					</h2>
				</svelte:fragment>
				<img
					src={detail.imageName}
					class="challenge-details__image"
					width={detail.imageWidth}
					height={detail.imageHeight}
					alt={$_(`index.challenge-summary-detail__image--${detail.name}`)}
					loading="lazy"
				>
				<p class="challenge-details__description">
					{@html $tp.execute($_(`index.challenge-details__description--${detail.name}`))}
				</p>
			</Details>
		{/each}
	</div>
</section>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import { toggleSummaryDetails, isFirstDetails } from '$lib/ui-kit/summary-detail/summaryDetails.js';
	import Details from '$lib/ui-kit/details/Details.svelte';

	import launchSvg from './assets/images/launch.svg';
	import hypothesesSvg from './assets/images/hypotheses.svg';
	import stakeholdersSvg from './assets/images/stakeholders.svg';
	import sellSvg from './assets/images/sell.svg';
	import supportSvg from './assets/images/support.svg';
	import roadmapSvg from './assets/images/roadmap.svg';

	const tp = getContextTypograf();

	let openSummaryDetail = 'launch';

	function handleToggle (name) {
		openSummaryDetail = toggleSummaryDetails(openSummaryDetail, name);
	}
	const details = [
		{ name: 'launch', imageName: launchSvg, imageWidth: 357, imageHeight: 217 },
		{ name: 'hypotheses', imageName: hypothesesSvg, imageWidth: 229, imageHeight: 307 },
		{ name: 'stakeholders', imageName: stakeholdersSvg, imageWidth: 272, imageHeight: 271 },
		{ name: 'sell', imageName: sellSvg, imageWidth: 244, imageHeight: 350 },
		{ name: 'support', imageName: supportSvg, imageWidth: 209, imageHeight: 317 },
		{ name: 'roadmap', imageName: roadmapSvg, imageWidth: 328, imageHeight: 315 }
	];
</script>

<style src="./challenge.pcss"></style>
