<script lang="ts">
	import errorIcon from '$lib/assets/images/error-icon.webp';
	import loadingIcon from '$lib/assets/images/loading-icon.webp';
	import successIcon from '$lib/assets/images/success-icon.webp';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { indexStyle } from './store';

	let isClicked: boolean = false;

	const handleOnClick = () => {
		isClicked = true;
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
			if (errorTitle === 'Contact already exist') {
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
			isClicked = false;
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
</script>

<button
	on:click={handleOnClick}
	class="w-full h-[3.875rem] sm:h-[2.625rem] gray-gradient rounded-20 px-10 py-2.5 flex items-center justify-center hover:bg-color-gray"
>
	{#if !isClicked}
		<p
			class="font-clash leading-[1.375rem] capitalize tracking-[0.0375rem] text-[20px] font-medium"
		>
			subscribe
		</p>
	{:else}
		<div class="w-full h-full">
			{#if !submitting && !success && !error && !memberExists}
				<form
					in:fade={{ delay: 50, duration: 150 }}
					out:fade={{ delay: 50, duration: 50 }}
					on:submit|preventDefault={handleSubmit}
					method="POST"
					action="/api/subscribe"
					id="subscribeForm"
					class="w-full h-full flex-row items-center"
				>
					<div class="flex items-center flex-row justify-between h-full w-full my-auto">
						<label for="email" class="hidden"></label>
						<input
							bind:this={input}
							type="email"
							name="EMAIL"
							class="placeholder:text-color-white ml-[-1rem] w-[70%] font-robotoMono leading-[1.375rem] align-top tracking-[0.0375rem] text-[0.875rem] font-semibold bg-transparent !outline-none !border-none !ring-color-white rounded-[6.25rem] h-full"
							required
							value=""
							placeholder="Signup For Updates"
						/>
						<button
							bind:this={submit}
							type="submit"
							class="bg-color-gray rounded-[6.25rem] shadow-custom py-[0.125rem] px-2 font-robotoMono leading-[0.875rem] tracking-[0.0375rem] text-[0.875rem] font-semibold invisible flex-none w-[30%] align-top h-full border border-color-gray"
							>submit</button
						>
					</div>
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
		</div>
	{/if}
</button>
