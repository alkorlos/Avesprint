<details class="details" open={open}>
	<summary class="details__summary">
		<slot name="summary"></slot>
	</summary>

	<slot></slot>
</details>

<script>
	export let open = undefined;
</script>

<style src="./details.pcss"></style>
