<script lang="ts">
    import type { Project } from '../../../constants/projects';
    
    export let projects: Project[];
    export let selectedIndex: number;
    
    function handleClick(index: number) {
        // selectedIndex = index;
        document.getElementById((index + 1).toString())?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
</script>

<div class="h-24 sm:w-40 sm:h-screen flex sm:flex-col items-center justify-center sm:justify-between sm:sticky top-0">
    <div class="h-full flex flex-row sm:flex-col items-center gap-4 overflow-x-auto sm:overflow-x-hidden sm:overflow-y-auto px-2 sm:px-8 pb-4 pt-2 sm:py-8 
        [mask-image:linear-gradient(to_right,transparent,black_4rem,black_calc(100%-4rem),transparent)] 
        sm:[mask-image:linear-gradient(to_bottom,transparent,black_4rem,black_calc(100%-4rem),transparent)]">
        {#each projects as {thumbnailPath}, index}
            <button 
                class="flex-shrink-0 h-full sm:h-auto sm:w-full aspect-square rounded-128 overflow-hidden {selectedIndex === index ? 'border-2 sm:border-4 border-color-white' : ''}"
                on:click={() => handleClick(index)}
                role="radio"
                aria-checked={selectedIndex === index}
            >
                <img 
                    draggable="false"
                    class="w-full h-full object-cover" 
                    src={thumbnailPath} 
                    alt=""
                >
            </button>
        {/each}
    </div>
</div> 

<style>
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
</style>