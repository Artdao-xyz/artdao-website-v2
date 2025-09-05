<script lang="ts">
    import { fly } from 'svelte/transition';

    export let href: string;
    export let isVisible: boolean = false;
</script>

{#if isVisible}
    <a 
        transition:fly={{ duration: 200 }}
        href={href}
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
               h-32 w-32 px-5 py-11 bg-[#d9d9d9]/20 rounded-[999px] outline outline-2 outline-white backdrop-blur-[2px] inline-flex flex-col justify-center items-center gap-2.5
               transition-all duration-200 ease-out
               opacity-100 scale-100
               hover:scale-110 hover:shadow-xl
               group"
        on:click={(e) => {
            // Permitir que el link funcione normalmente
            e.stopPropagation();
        }}
    >
        <div class="justify-center text-white text-[10px] font-normal font-robotoMono leading-3 tracking-tight">Enter the Zine</div>
    </a>
{/if}

