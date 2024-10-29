<script lang="ts">
	import homeIcon from '$lib/assets/images/home-icon.png';
	import { HOME } from '../../../constants/routes';

	export let isHome: boolean = false;
</script>

<a href={HOME}>
	<img
		src={homeIcon}
		alt="Home Icon"
		class="fixed bottom-[5%] {isHome
			? 'right-[2.15%]'
			: 'right-[3%]'} w-[4.6875rem] hidden sm:block"
	/>
</a>
