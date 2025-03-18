<script lang="ts">
    import { onMount } from 'svelte';
    import { projects } from '../../../constants/projects';
    import HomeButtons from '$lib/components/HomeButtons/HomeButtons.svelte';
    import HomeThumbnails from '$lib/components/HomeThumbnails/HomeThumbnails.svelte';
	import Metaball from '../Metaball/Metaball.svelte';
    import Info from '../Info/Info.svelte';
    import TopBarDesktop from '../TopBarDesktop/TopBarDesktop.svelte';
    import TopBarMobile from '../TopBarMobile/TopBarMobile.svelte';

    let selectedIndex = 0;
    let showInfo = false;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const newIndex = parseInt(entry.target.id) - 1;
                    selectedIndex = newIndex;
                }
            });
        }, {
            threshold: 0.5
        });

        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    });
</script>


<div class="h-dvh w-full bg-black text-white flex flex-col sm:flex-row-reverse">
    <!-- Top Bar - Fixed height -->
    <TopBarDesktop bind:showInfo/>
    <!-- Top Bar mobile -->
    <TopBarMobile bind:showInfo/>

    <div class="hidden sm:inline-flex fixed bottom-4 right-4 z-50">
        <Metaball/>
    </div>
    <HomeThumbnails {projects} />
    <HomeButtons {projects} bind:selectedIndex />

    {#if showInfo}
        <Info bind:showInfo/>
    {/if}
</div>