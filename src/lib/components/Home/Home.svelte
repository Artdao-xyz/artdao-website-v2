<script lang="ts">
    import { onMount } from 'svelte';
    import { projects } from '../../../constants/projects';
    import HomeButtons from '$lib/components/HomeButtons/HomeButtons.svelte';
    import HomeThumbnails from '$lib/components/HomeThumbnails/HomeThumbnails.svelte';
	import Metaball from '../Metaball/Metaball.svelte';
    
    let selectedIndex = 0;

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
    <div class="h-20 relative flex justify-between items-center sm:hidden pt-2 px-4">
        <Metaball/>
        <div class="glass-gradient px-3.5 h-14 inline-flex justify-start items-center gap-2.5 z-20">
            <button><img src="media/home/icons/world.svg" alt=""></button>
            <button><img src="media/home/icons/zine.svg" alt=""></button>
        </div>
    </div>

    <!-- Top Bar mobile -->
    <div class="hidden sm:inline-flex glass-gradient fixed top-4 right-4 px-3.5 h-14 justify-start items-center gap-2.5 z-20">
        <button><img src="media/home/icons/world.svg" alt=""></button>
        <button><img src="media/home/icons/zine.svg" alt=""></button>
    </div>
    <div class="hidden sm:inline-flex fixed bottom-4 right-4 z-50">
        <Metaball/>
    </div>

    <HomeThumbnails {projects} />

    <HomeButtons {projects} bind:selectedIndex />
</div>

<style>
    /* Hide scrollbar but keep functionality */
    main {
        -ms-overflow-style: none;
        scrollbar-width: none;
        scroll-behavior: smooth;
    }
    main::-webkit-scrollbar {
        display: none;
    }

    .glass-gradient {
        @apply backdrop-blur-xl
            rounded-40
            overflow-hidden
            bg-gradient-to-br from-[#fff8e3]/30 to-[#ffe4b5]/10
            shadow-[0_0_30px_rgba(255,244,214,0.15)]
            before:absolute before:inset-0 before:rounded-[40px] before:-z-10
            before:bg-gradient-to-tl before:from-[#fff8e3]/20 before:to-transparent
            before:shadow-[inset_1px_1px_1px_rgba(255,244,214,0.75)];
    }
</style>