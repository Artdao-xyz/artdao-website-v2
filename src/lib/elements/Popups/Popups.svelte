<script lang="ts">
	import { onDestroy } from 'svelte';
	import { isFooterVisible } from '../Footer/store';
	import NewsletterPopup from './components/NewsletterPopup.svelte';

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

	let hidePopup = false;

	const unsubscribe = isFooterVisible.subscribe((boolean) => {
		hidePopup = boolean;
	});

	onDestroy(unsubscribe);
</script>

<div
	class="hidden absolute left-[40px] bottom-8 sm:flex flex-row gap-[0.5rem] {hidePopup
		? 'sm:hidden z-0'
		: 'z-50'}"
>
	<!-- <a
		href="/drops"
		class="h-[4.0625rem] w-[10.6875rem] flex flex-row bg-color-gray-background rounded-[6.25rem] items-center justify-center hover:scale-105"
	>
		<p class="font-robotoMono text-[0.625rem] font-semibold leading-[1rem] tracking-[0.0625rem]">
			10W 12D OOH
		</p>
		<img src={dropHammer} alt="drop" class="w-[2.8234rem] h-[2.6282rem]" />
	</a> -->
	<NewsletterPopup />
</div>
