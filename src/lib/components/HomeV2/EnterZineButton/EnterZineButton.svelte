<script lang="ts">
    import { fly } from 'svelte/transition';

    export let href: string;
    export let isVisible: boolean = false;
</script>

<a 
    transition:fly={{ duration: 200 }}
    href={href}
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20
           h-32 w-32 inline-flex flex-col justify-center items-center gap-2.5
           transition-all duration-200 ease-out
           hover:scale-110 hover:shadow-xl
           group {isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}"
    on:click={(e) => {
        // Permitir que el link funcione normalmente
        e.stopPropagation();
    }}
>
    <!-- Glass effect button with neumorphic design -->
    <div class="relative h-32 w-32 rounded-full overflow-hidden">
        <!-- Outer shadow ring -->
        <div class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-300/30 to-gray-400/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1),inset_0_-2px_4px_rgba(255,255,255,0.3)]"></div>
        
        <!-- Main glass surface with gradient -->
        <div class="absolute inset-1 rounded-full bg-gradient-to-br from-gray-200/40 via-gray-300/30 to-gray-400/20 backdrop-blur-sm"></div>
        
        <!-- Inner highlight ring -->
        <div class="absolute inset-2 rounded-full bg-gradient-to-br from-white/60 via-white/20 to-transparent shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]"></div>
        
        <!-- Center content area -->
        <div class="absolute inset-3 rounded-full bg-gradient-to-br from-gray-200/30 via-gray-300/20 to-gray-400/10 backdrop-blur-[1px] flex items-center justify-center">
            <div class="text-gray-600 text-[10px] font-normal font-robotoMono leading-3 tracking-tight text-center px-2">
                Enter the Zine
            </div>
        </div>
        
        <!-- Top-left highlight accent -->
        <div class="absolute top-2 left-2 w-8 h-8 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-sm"></div>
    </div>
</a>

