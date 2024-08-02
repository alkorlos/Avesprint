<section class="section-contact" id="section-contact" aria-labelledby="contact-title">
	<div class="contact__root">
		<div class="contact__header">
			<h2 class="contact__title" id="contact-title">
				{@html $tp.execute($_('index.contact__title'))}
			</h2>
			<p class="contact__description">
				{@html $tp.execute($_('index.contact__description'))}
			</p>
		</div>

		<div class="contact__form-wrapper">
			<FormContainer
				action="/api/contact"
				messageSuccess={$tp.execute($_('index.form-contact__message--success'))}
				messageFailure={$tp.execute($_('index.form-contact__message--failure'))}
			>
				<FormGroup mode="horizontal">
					<FormItem
						for="form-contact__input--name"
						label={$tp.execute($_('index.form-contact__label--name'))}
						labelHidden="true"
						error={$tp.execute($_('index.form-contact__error--name'))}
						errorId="form-contact__error--name"
						let:onValidChange
					>
						<Input
							id="form-contact__input--name"
							type="text"
							placeholder={$_('index.form-contact__placeholder--name')}
							name="name"
							required
							autocomplete="name"
							ariaDescribedby="form-contact__error--name"
							{onValidChange}
						/>
					</FormItem>

					<FormItem
						for="form-contact__input--email"
						label={$tp.execute($_('index.form-contact__label--email'))}
						labelHidden="true"
						error={$tp.execute($_('index.form-contact__error--email'))}
						errorId="form-contact__error--email"
						let:onValidChange
					>
						<Input
							id="form-contact__input--email"
							type="email"
							placeholder={$_('index.form-contact__placeholder--email')}
							name="email"
							required
							autocomplete="email"
							ariaDescribedby="form-contact__error--email"
							{onValidChange}
						/>
					</FormItem>

					<InputHidden name="reason" value="Заявка на запуск продукта" />

					<InputHidden name="message" value="Помогите мне запустить продукт за 2 недели" />

					<!-- check spam, the value should be "speak" -->
					<InputHidden name="subject" value="speak" />

					<Button label={$tp.execute($_('index.form-contact__button'))} />
				</FormGroup>
			</FormContainer>
		</div>
	</div>
</section>

<script>
	import { _ } from 'svelte-i18n';

	import { getContextTypograf } from '$lib/context/Typograf.js';

	import FormContainer from '$lib/ui-kit/form-container/FormContainer.svelte';
	import FormGroup from '$lib/ui-kit/form-group/FormGroup.svelte';
	import FormItem from '$lib/ui-kit/form-item/FormItem.svelte';
	import Input from '$lib/ui-kit/input/Input.svelte';
	import InputHidden from '$lib/ui-kit/input-hidden/InputHidden.svelte';
	import Button from '$lib/ui-kit/button/Button.svelte';

	const tp = getContextTypograf();
</script>

<style src="./contact.pcss"></style>
