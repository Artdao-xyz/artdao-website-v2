<script>
	import { progress } from '../../../utils/store';

	import loading from '$lib/assets/images/loading.gif';
</script>

<div
	class="bg-white absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4 z-50"
>
	<div class="h-[20%]"><img class="h-full" src={loading} alt="Loading gif" /></div>
	<progress class="invisible" value={$progress} max="100"></progress>
</div>
