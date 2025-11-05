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
	export let design: 'modern' | 'classic' = 'classic';

	// $: console.log('design', design);

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
{#if design === 'modern'}
	<!-- Modern Design (Current) -->
	<div class="{isAbsolute ? 'fixed bottom-4 left-4 z-10' : ''}">
		<form
			in:fade={{ delay: 50, duration: 150 }}
			out:fade={{ delay: 50, duration: 50 }}
			on:submit|preventDefault={handleSubmit}
			method="POST"
			action="/api/subscribe"
			id="subscribeForm"
			class="w-full"
		>
			<div data-status="Default" class="mobile-nav-button min-w-64 flex sm:flex-col sm:justify-start sm:items-start rounded-20 sm:rounded-[999px] shadow-[2px_2px_10px_0px_rgba(0,0,0,0.20)] backdrop-blur-[34px] p-2 sm:p-5 sm:shadow-none sm:outline-none sm:backdrop-blur-none" style="background: {width < 640 ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};">
				<div class="px-0 w-full flex justify-center sm:bg-[#F7F5F2] items-center gap-10 sm:px-5 sm:rounded-[999px] sm:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.20)] sm:outline sm:outline-1 sm:outline-black sm:backdrop-blur-[34px]">
					<label for="email" class="hidden"></label>
					<input
						bind:this={input}
						type="email"
						name="EMAIL"
						class="w-full sm:text-center bg-transparent text-white sm:text-black text-xs font-normal font-robotoMono leading-none tracking-widest placeholder:text-white/40 sm:placeholder:text-black/40 !outline-none !border-none focus:outline-none focus:ring-0 focus:border-none"
						style="outline: none !important; border: none !important; box-shadow: none !important;"
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
					class="px-3 sm:px-7 sm:py-3 flex justify-center items-center text-xs font-robotoMono font-bold leading-none tracking-wide sm:rounded-[999px] sm:shadow-[2px_2px_10px_0px_rgba(0,0,0,0.20)] sm:backdrop-blur-[34px] rounded-[999px] {submitting 
						? 'bg-black text-white' 
						: success 
							? 'bg-transparent text-black border border-black' 
							: error || memberExists 
								? 'bg-transparent text-red-500 border border-red-500' 
								: 'bg-gradient-to-br from-black/60 to-black/80 text-white'}"
				>
					{#if submitting}
						Submitting
					{:else if success}
						Sent
					{:else if error || memberExists}
						Error
					{:else}
						Subscribe
					{/if}
				</button>
			</div>
			<div aria-hidden="true" style="position: absolute; left: -5000px;">
				<!-- /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */ -->
				<input type="text" name="b_d150dd71762335c56d7e5811c_6f099dd01d" tabindex="-1" value="" />
			</div>
		</form>
	</div>
{:else}
	<!-- Classic Design (Original) -->
	<div class="{isAbsolute ? 'fixed bottom-8 left-8 z-50' : ''}">
		<button
			class="w-full sm:h-[2.625rem] {width < 640 ? 'mobile-nav-button bg-black/90' : 'bg-color-white'} rounded-20 px-2 py-2.5 flex items-center justify-center"
			on:click={() => {}}
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
								class="flex-1 min-w-0 {width < 640 ? 'text-white placeholder:text-white/40' : 'text-color-black placeholder:text-color-black'} text-xs font-medium font-robotoMono leading-5 bg-transparent !outline-none !border-none !ring-0 focus:!outline-none focus:!border-none focus:!ring-0 rounded-[6.25rem] h-full"
								style="outline: none !important; border: none !important; box-shadow: none !important;"
								required
								value=""
								placeholder="Enter your email"
								disabled={submitting}
							/>
							<button
								bind:this={submit}
								type="submit"
								class="text-white bg-black hover:bg-gray-800 transition-all duration-300 rounded-[6.25rem] py-[0.125rem] px-4 font-clash leading-[0.875rem] text-[0.875rem] font-medium whitespace-nowrap h-full relative overflow-hidden"
								style="background: linear-gradient(135deg, white 0%, white 1px, black 1px, black 100%); padding: 1px;"
							>
								<div class="bg-black rounded-[6.25rem] h-full flex items-center justify-center px-3 py-[0.125rem]">
									Subscribe
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
							Submitting...
						{:else if success}
							Sent
						{:else if memberExists}
							Error
						{:else if error}
							Error
						{/if}
					</div>
				{/if}
			</div>
		</button>
	</div>
{/if}

<style>
	:global(.mobile-nav-button) {
		position: relative;
		background-clip: padding-box;
	}
	
	:global(.mobile-nav-button::before) {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: 21px;
		background: transparent;
		z-index: -1;
		pointer-events: none;
		clip-path: inset(0 round 20px);
	}
	
	:global(.mobile-nav-button::after) {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: 20px;
		background: inherit;
		z-index: -1;
		pointer-events: none;
	}
</style>
