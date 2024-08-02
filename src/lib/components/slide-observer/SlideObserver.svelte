<div {name} bind:this={slide}>
	<slot />
</div>

<script>
	import { onMount } from 'svelte';

	export let name;
	export let slideVisible;

	let slide;
	const threshold = 0.3;

	onMount(() => {
		const options = {
			threshold: threshold
		};

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					slideVisible = name;
				}
			});
		}, options);

		observer.observe(slide);

		return () => {
			observer.unobserve(slide);
		};
	});
</script>
