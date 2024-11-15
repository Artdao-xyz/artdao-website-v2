<script lang="ts">
	import errorIcon from '$lib/assets/images/error-icon.webp';
	import loadingIcon from '$lib/assets/images/loading-icon.webp';
	import successIcon from '$lib/assets/images/success-icon.webp';
	import { indexStyle } from '$lib/elements/HomeNewsletter/store';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visible: boolean = false;

	const handleOnClick = () => {
		visible = true;
	};

	let index = 0;
	let submitting = false;
	let success = false;
	let error = false;
	let memberExists = false;

	const handleSubmit = async (event: any) => {
		// console.log('submitting', submitting);
		submitting = true;
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const response = await fetch(form.action, {
			method: form.method,
			body: JSON.stringify({
				email: formData.get('EMAIL')
			}),
			headers: {
				Accept: 'application/json'
			}
		});
		const data = await response.json();
		// @dev has shape { success : true }
		// console.log(data);
		if (data.success) {
			success = true;
		} else {
			const errorType = JSON.parse(data.error);
			const errorTitle = errorType.message;
			console.error(errorTitle);
			if (
				errorTitle === 'Unable to create contact, email is already associated with another Contact'
			) {
				memberExists = true;
			} else {
				error = true;
			}
		}
		submitting = false;
		// console.log(submitting);
		setTimeout(() => {
			success = false;
			memberExists = false;
			error = false;
			visible = false;
		}, 4000);
	};
	let input: HTMLInputElement;
	let submit: HTMLButtonElement;

	onMount(() => {
		const styleStore = indexStyle.subscribe((value) => {
			index = value;
		});
		onfocus = () => {
			// console.log('focus');
			if (input.value.trim().length > 0) {
				submit.style.visibility = 'visible';
			}
		};

		onkeyup = () => {
			if (input.value.trim().length > 0) {
				submit.style.visibility = 'visible';
			} else {
				submit.style.visibility = 'hidden';
			}
		};

		return styleStore;
	});

	let size: number;
</script>

<svelte:window bind:innerWidth={size} />
<button
	style={size < 500 ? `width: 100%;` : 'width: 257.27px'}
	class="h-[49px] rounded-[0.9375rem] sm:h-[1.625rem] {!visible
		? '!sm:w-[10.6875rem]'
		: '!sm:w-[15rem]'} nav-gradient-unselected sm:rounded-[6.25rem] px-5 sm:px-5 flex flex-col justify-center hover:nav-gradient-selected hover:border hover:border-color-dark"
	on:click={handleOnClick}
>
	{#if !submitting && !success && !error && !memberExists}
		<div class="w-full flex flex-row justify-start gap-[0.5rem] items-center">
			<div class="w-full flex flex-row justify-start gap-[0.5rem] items-center">
				<form
					in:fade={{ delay: 50, duration: 150 }}
					out:fade={{ delay: 50, duration: 50 }}
					on:submit|preventDefault={handleSubmit}
					method="POST"
					action="/api/subscribe"
					id="subscribeForm"
					class="w-full"
				>
					{#if !submitting && !success && !error && !memberExists}
						<div class="flex gap-[0.5rem] items-center flex-row">
							<label for="email" class="hidden"></label>
							{#if size < 500}
								<button
									bind:this={submit}
									type="submit"
									class="bg-color-gray rounded-[6.25rem] shadow-custom my-auto h-[18px] py-[0.125rem] px-2 text-[0.75rem] leading-[0.75rem] font-medium invisible flex-none w-[25%] align-top border border-color-gray"
									>submit</button
								>
							{/if}
							<input
								bind:this={input}
								type="email"
								name="EMAIL"
								class="placeholder:text-color-white w-full h-[18px] py-0 placeholder:text-[1rem] !placeholder:ml-[0.2rem] font-robotoMono placeholder:sm:text-[0.75rem] pr-[20px] sm:text-[0.75rem] font-medium align-top bg-transparent !outline-none !border-none !ring-color-white rounded-[6.25rem] {size <
								500
									? 'text-right'
									: 'text-left'}"
								required
								value=""
								placeholder="Enter Your Email"
							/>
							{#if size > 500}
								<button
									bind:this={submit}
									type="submit"
									class="bg-color-gray rounded-[6.25rem] shadow-custom my-auto h-[18px] py-[0.125rem] px-2 text-[0.75rem] leading-[0.75rem] font-medium invisible flex-none w-[25%] align-top border border-color-gray"
									>submit</button
								>
							{/if}
						</div>
					{/if}
					<div aria-hidden="true" style="position: absolute; left: -5000px;">
						<!-- /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ -->
						<input
							type="text"
							name="b_d150dd71762335c56d7e5811c_6f099dd01d"
							tabindex="-1"
							value=""
						/>
					</div>
				</form>
			</div>
		</div>
	{/if}
	{#if submitting || success || memberExists || error}
		<div
			in:fade={{ delay: 50, duration: 150 }}
			out:fade={{ delay: 50, duration: 50 }}
			class="font-robotoMono font-medium italic flex items-center justify-center w-full h-full"
		>
			{#if submitting}
				<img src={loadingIcon} alt="submitting" class="h-[30px] sm:h-[21px]" />
			{:else if success}
				<img src={successIcon} alt="success" class="w-[29px] sm:w-[24px]" />
			{:else if memberExists}
				<div class="flex flex-row gap-1">
					<img src={errorIcon} alt="error" class="w-[17px] sm:w-[14px]" />
				</div>
			{:else if error}
				<img src={errorIcon} alt="error" class="w-[17px] sm:w-[14px]" />
			{/if}
		</div>
	{/if}
</button>
