<script lang="ts">
	import dropHammer from '$lib/assets/images/drops/psipsikoko-hammer.png';
	import infoCircle from '$lib/assets/images/Ellipse 30.png';
	import infoCircleWhite from '$lib/assets/images/Ellipse-white.png';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { indexStyle } from './store';

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

<div class="hidden absolute right-40 bottom-16 flex-row laptopM:flex gap-[0.5rem] z-50">
	<a
		href="/drops"
		class="h-[4.0625rem] w-[10.6875rem] flex flex-row bg-color-gray-background rounded-[6.25rem] items-center justify-center hover:scale-105"
	>
		<p class="font-robotoMono text-[0.625rem] font-semibold leading-[1rem] tracking-[0.0625rem]">
			10W 12D OOH
		</p>
		<img src={dropHammer} alt="drop" class="w-[2.8234rem] h-[2.6282rem]" />
	</a>
	<button
		class="h-[4.0625rem] {!visible ? 'w-[10.6875rem]' : 'w-[15rem]'} {!visible
			? 'bg-color-gray-background'
			: 'bg-color-dark'} rounded-[6.25rem] px-5 flex flex-col justify-center gap-[0.5rem] hover:scale-105"
		on:click={handleOnClick}
	>
		<div class="flex gap-[0.25rem] w-full justify-start items-center h-[0.5rem]">
			<img src={!visible ? infoCircle : infoCircleWhite} alt="info" class="w-[0.5rem] h-[0.5rem]" />
			<p class="font-clash text-[0.625rem] font-semibold tracking-[0.0081rem] leading-[1.375rem]">
				NEWSLETTER
			</p>
		</div>
		<div class="w-full flex flex-row justify-start gap-[0.5rem] items-center">
			{#if !visible}
				<p class="font-robotoMono text-[0.625rem] font-medium h-[0.4375rem] align-top">
					Sign up for updates
				</p>
			{:else}
				<div class="w-full h-[7px]">
					<form
						in:fade={{ delay: 50, duration: 150 }}
						out:fade={{ delay: 50, duration: 50 }}
						on:submit|preventDefault={handleSubmit}
						method="POST"
						action="/api/subscribe"
						id="subscribeForm"
						class="w-full"
					>
						<div class="flex gap-[1rem] items-center flex-row">
							<label for="email" class="hidden"></label>
							<input
								bind:this={input}
								type="email"
								name="EMAIL"
								class="placeholder:text-color-white w-[70%] font-robotoMono text-[0.625rem] font-medium h-[0.4375rem] align-top bg-transparent outline-none border-none rounded-[6.25rem]"
								required
								value=""
								placeholder="Enter Your Email"
							/>
							<button
								bind:this={submit}
								type="submit"
								class="bg-color-gray rounded-[6.25rem] shadow-custom py-[0.125rem] px-2 text-[0.625rem] font-medium invisible flex-none w-[30%] align-top"
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

					<div
						in:fade={{ delay: 50, duration: 150 }}
						out:fade={{ delay: 50, duration: 50 }}
						class="font-robotoMono font-medium italic flex items-center rounded-[6.25rem] mt-[1rem] bg-color-dark"
					>
						{#if submitting}
							<p class="text-xs lp:text-sm mx-auto tracking-wider py-1">🔨 submitting...</p>
						{:else if success}
							<p class="text-xs lp:text-sm tracking-wider py-1">Thank you for subscribing!</p>
						{:else if memberExists}
							<p class="text-xs lp:text-sm tracking-wider py-1">You're already subscribed!</p>
						{:else if error}
							<p class="text-xs lp:text-sm tracking-wider py-1">
								Something went wrong, please try again.
							</p>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</button>
</div>
