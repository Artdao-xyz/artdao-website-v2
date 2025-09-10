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
	export let isFooter = false;

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

		return styleStore;
	});

	let m = { x: 0, y: 0 };

	function handleMousemove(event: any) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<button
	style={`background: radial-gradient(at ${(m.x * 1000) / width}% ${(m.y * 1000) / height}%, #A6A6A6, #313431)`}
	on:mousemove={handleMousemove}
	on:click={handleOnClick}
	class="w-full {!isFooter
		? 'h-[3.875rem]'
		: 'h-[3.0625rem]'} sm:h-[2.625rem] gray-gradient rounded-20 px-4 py-2.5 flex items-center justify-center"
>
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
				<div class="flex items-center gap-4 h-full w-full">
					<label for="email" class="hidden"></label>
					<input
						bind:this={input}
						type="email"
						name="EMAIL"
						class="flex-1 min-w-0 text-color-white placeholder:text-color-white {!isFooter
							? 'text-[1rem]'
							: 'text-[14px] md:text-[1rem]'} font-medium font-clash leading-5 bg-transparent !outline-none !border-none !ring-color-white rounded-[6.25rem] h-full"
						required
						value=""
						placeholder="Enter your email"
					/>
					<button
						bind:this={submit}
						type="submit"
						class="text-white bg-black hover:bg-gray-800 transition-all duration-300 rounded-[6.25rem] py-[0.125rem] px-4 font-clash leading-[0.875rem] text-[0.875rem] font-medium whitespace-nowrap h-full relative overflow-hidden"
						style="background: linear-gradient(135deg, white 0%, white 1px, black 1px, black 100%); padding: 1px;"
					>
						<div class="bg-black rounded-[6.25rem] h-full flex items-center justify-center px-3 py-[0.125rem]">
							Submit
						</div>
					</button>
				</div>
				<div aria-hidden="true" style="position: absolute; left: -5000px;">
					<!-- /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ -->
					<input type="text" name="b_d150dd71762335c56d7e5811c_6f099dd01d" tabindex="-1" value="" />
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
</button>
