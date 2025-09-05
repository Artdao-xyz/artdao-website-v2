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
               bg-blue-500 rounded-lg px-6 py-2
                rounded-[9999px]
               transition-all duration-200 ease-out
               opacity-100 scale-100
                shadow-lg hover:bg-white hover:scale-105 hover:shadow-xl
               group"
        on:click={(e) => {
            // Permitir que el link funcione normalmente
            e.stopPropagation();
        }}
    >
        <span class="justify-center text-white text-xs font-bold font-robotoMono leading-none tracking-widest group-hover:text-black">
            &lt; Enter Zine &gt;
        </span>
    </a>
{/if}

