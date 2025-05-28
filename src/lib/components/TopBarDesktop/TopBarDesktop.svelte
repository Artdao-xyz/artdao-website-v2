<script lang="ts">
    export let showInfo: boolean;
</script>

<div class="hidden sm:inline-flex glass-gradient fixed top-4 right-4 py-1.5 px-3 h-auto justify-center items-center gap-2 z-20">
    <a class="p-2 hover:bg-gradient-to-br hover:from-white/50 hover:to-white/25 rounded-20" href="/map"><img src="media/home/icons/world.svg" alt=""></a>
    <button class="relative p-3 hover:bg-gradient-to-br hover:from-white/50 hover:to-white/25 rounded-30" on:click={() => showInfo = true}><img class="h-full" src="media/home/icons/link.svg" alt=""></button>
</div>

<style>
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