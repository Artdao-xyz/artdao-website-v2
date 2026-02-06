<script lang="ts">
    import type { Project } from '../../../constants/projects';
    import { onMount } from 'svelte';
    import { scrollProgress } from '../../../utils/store';
    export let projects: Project[];
    import { isExiting } from '../../../utils/preloadImages';
    import { getMetaballProgress } from '../../../utils/metaball/getMetaballProgress';
    let homeThumbnails: HTMLElement;
    let isReady = false;

    onMount(() => {
        if (homeThumbnails) {
            homeThumbnails.addEventListener('scroll', () => {
                getMetaballProgress(homeThumbnails);
            });
        }
        
        setTimeout(() => {
            isReady = true;
        }, 100);
    });
</script>

<main bind:this={homeThumbnails} class="flex-1 overflow-y-auto snap-y snap-mandatory snap-always w-full">
    {#each projects as {title, subtitle, description, thumbnailPath, pagePath}, index}
        <section 
            id={(index + 1).toString()}
            class="relative font-neue text-color-white min-h-[calc(100dvh-10rem)] h-[calc(100dvh-10rem)] sm:h-dvh sm:min-h-dvh w-full snap-start snap-always p-4 sm:pl-0 sm:pr-8 sm:py-8 tracking-wider slide-in"
            style="--slide-delay: {index * 100}ms"
        >
            <a href={pagePath} class="relative w-full h-full flex flex-col justify-between flex-shrink-0 p-2 sm:p-8">
                <img draggable="false" id={(index + 1).toString()} class="absolute top-0 left-0 w-full h-full object-cover rounded-20" src={Array.isArray(thumbnailPath) ? thumbnailPath[0] : thumbnailPath} alt="">
                
                <div class="relative space-y-2 w-full sm:w-fit glass-gradient p-5 sm:p-8 rounded-20">
                    <h1 class="text-2xl sm:text-4xl font-semibold">{title}</h1>
                    <h3 class="text-sm sm:text-base font-medium font-roboto">{subtitle}</h3>
                </div>

                <h2 class="relative w-full sm:w-1/2 sm:max-w-xl text-sm sm:text-lg font-medium glass-gradient p-5 sm:p-8 rounded-20">
                    {description}
                </h2>
            </a>
        </section>
    {/each}
</main>

<style>
    .slide-in {
        opacity: 0;
        transform: translateX(500px);
        animation: slideIn 0.75s var(--slide-delay) forwards;
    }

    @keyframes slideIn {
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .glass-gradient {
        @apply backdrop-blur-xl
            bg-gradient-to-br from-[#fff8e3]/30 to-[#ffe4b5]/10
            shadow-[0_0_30px_rgba(255,244,214,0.15)]
            before:absolute before:inset-0 before:rounded-20 before:-z-10
            before:bg-gradient-to-tl before:from-[#fff8e3]/20 before:to-transparent
            before:shadow-[inset_1px_1px_1px_rgba(255,244,214,0.75)];
    }
</style>