<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { indexStyle } from './store';

	let index = 0;
	let submitting = false;
	let success = false;
	let error = false;
	let memberExists = false;
	export let isAbsolute = false;

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

		return styleStore;
	});

	let width: number;
	let height: number;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<div class="{isAbsolute ? 'fixed bottom-8 left-8 z-50' : ''}">
	<form
		in:fade={{ delay: 50, duration: 150 }}
		out:fade={{ delay: 50, duration: 50 }}
		on:submit|preventDefault={handleSubmit}
		method="POST"
		action="/api/subscribe"
		id="subscribeForm"
		class="w-full"
	>
		<div data-status="Default" class="min-w-64 flex sm:flex-col sm:justify-start sm:items-start rounded-20 sm:rounded-[999px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.20)] outline outline-1 outline-white/40 backdrop-blur-[34px] p-2 sm:p-5 sm:shadow-none sm:outline-none sm:backdrop-blur-none" style="background: {width < 640 ? 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)' : 'transparent'};">
			<div class="px-0 w-full flex justify-center items-center gap-10 sm:px-5 sm:rounded-[999px] sm:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.20)] sm:outline sm:outline-1 sm:outline-black sm:backdrop-blur-[34px]">
				<label for="email" class="hidden"></label>
				<input
					bind:this={input}
					type="email"
					name="EMAIL"
					class="w-full sm:text-center bg-transparent text-white sm:text-black text-xs font-normal font-robotoMono leading-none tracking-widest placeholder:text-white/40 sm:placeholder:text-black/40 !outline-none !border-none focus:outline-none"
					required
					value=""
					placeholder="Enter your email"
					disabled={submitting}
				/>
			</div>
			<button
				bind:this={submit}
				type="submit"
				disabled={submitting}
				class="px-3 sm:px-7 sm:py-3 flex justify-center items-center text-xs fontRobotoMono font-bold font-robotoMono leading-none tracking-wide sm:rounded-[999px] sm:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.20)] sm:outline sm:outline-1 sm:outline-white/40 sm:backdrop-blur-[34px] rounded-[999px] {submitting 
					? 'bg-gray-400 text-gray-600' 
					: success 
						? 'bg-transparent text-black' 
						: error || memberExists 
							? 'bg-transparent text-red-500' 
							: 'bg-black sm:bg-gradient-to-br sm:from-black/60 sm:to-black/80 text-white'}"
			>
				{#if submitting}
					Submitting...
				{:else if success}
					Sent
				{:else if error || memberExists}
					Error
				{:else}
					Submit
				{/if}
			</button>
		</div>
		<div aria-hidden="true" style="position: absolute; left: -5000px;">
			<!-- /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ -->
			<input type="text" name="b_d150dd71762335c56d7e5811c_6f099dd01d" tabindex="-1" value="" />
		</div>
	</form>
</div>
