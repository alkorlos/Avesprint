<section class="section-reward" id="section-reward" style="--is: --section-reward;" aria-labelledby="reward-title">
	<h2 class="reward__title" id="reward-title">
		{@html $tp.execute($_('index.reward__title'))}
	</h2>

	<div class="reward-summary-detail reward-summary-detail--desktop">
		<div class="reward-summary-detail__details">
			{#each details as detail}
				<div
					class="reward-summary-detail__detail"
					class:reward-summary-detail__detail--open={openSummaryDetail === detail.name}
					id="reward-summary-detail__detail--{detail.name}"
				>
					<img
						src={detail.imageName}
						class="reward-summary-detail__image"
						width={detail.name}
						height={detail.name}
						alt={$_(`index.reward-summary-detail__image--${detail.name}`)}
						loading="lazy"
					>
				</div>
			{/each}
		</div>
		<div class="reward-summary-detail__summaries">
			{#each details as detail}
				<div class="reward-summary-detail__summary">
					<h2 class="reward-summary-detail__title">
						<button
							class="reward-summary-detail__button"
							class:reward-summary-detail__button--active={openSummaryDetail === detail.name}
							aria-expanded={openSummaryDetail === detail.name}
							aria-controls="reward-summary-detail__detail--{detail.name}"
							on:mouseenter={() => handleToggle(detail.name)}
							on:focus={() => handleToggle(detail.name)}
						>
							{@html $tp.execute($_(`index.reward-details__title--${detail.name}`))}
						</button>
					</h2>
					{#if $_(`index.reward-details__description--${detail.name}`) !== `index.reward-details__description--${detail.name}`}
						<p class="reward-summary-detail__description">
							{@html $tp.execute($_(`index.reward-details__description--${detail.name}`))}
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<div class="reward-details-wrapper--mobile">
		{#each details as detail}
			<Details open={isFirstDetails(detail, details)} --summary-content="1fr">
				<svelte:fragment slot="summary">
					<div class="reward-details__summary-inner">
						<h2 class="reward-details__title">
							{@html $tp.execute($_(`index.reward-details__title--${detail.name}`))}
						</h2>
						{#if $_(`index.reward-details__description--${detail.name}`) !== `index.reward-details__description--${detail.name}`}
							<p class="reward-details__description">
								{@html $tp.execute($_(`index.reward-details__description--${detail.name}`))}
							</p>
						{/if}
					</div>
				</svelte:fragment>
				<img
					src={detail.imageName}
					class="reward-details__image"
					width={detail.imageWidth}
					height={detail.imageHeight}
					alt={$_(`index.reward-summary-detail__image--${detail.name}`)}
					loading="lazy"
				>
			</Details>
		{/each}
	</div>
</section>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import { toggleSummaryDetails, isFirstDetails } from '$lib/ui-kit/summary-detail/summaryDetails.js';
	import Details from '$lib/ui-kit/details/Details.svelte';

	import prototypeSvg from './assets/images/prototype.svg';
	import hypothesesSvg from './assets/images/hypotheses.svg';
	import expertsSvg from './assets/images/experts.svg';
	import presentationSvg from './assets/images/presentation.svg';

	const tp = getContextTypograf();

	let openSummaryDetail = 'prototype';

	function handleToggle (name) {
		openSummaryDetail = toggleSummaryDetails(openSummaryDetail, name);
	}

	const details = [
		{ name: 'prototype', imageName: prototypeSvg, imageWidth: 484, imageHeight: 522 },
		{ name: 'hypotheses', imageName: hypothesesSvg, imageWidth: 484, imageHeight: 537 },
		{ name: 'experts', imageName: expertsSvg, imageWidth: 484, imageHeight: 537 },
		{ name: 'presentation', imageName: presentationSvg, imageWidth: 484, imageHeight: 537 }
	];
</script>

<style src="./reward.pcss"></style>
