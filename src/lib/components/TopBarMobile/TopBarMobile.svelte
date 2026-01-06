<script lang="ts">
    import Metaball from '../Metaball/Metaball.svelte';
    export let showInfo: boolean;
</script>

<div class="h-20 relative w-full flex justify-between items-center lg:hidden pt-2 px-4">
        <Metaball/>
        <div class="glass-gradient px-3.5 h-14 inline-flex justify-center items-center gap-2.5 z-20">
            <a class="p-2" href="/map"><img src="media/home/icons/world.svg" alt=""></a>
            <button class="p-2" on:click={() => showInfo = true}><img src="media/home/icons/link.svg" alt=""></button>
        </div>
</div>

<style>
    .glass-gradient {
        @apply backdrop-blur-xl
            rounded-40
            overflow-hidden
            bg-gradient-to-br from-[#000000]/70 to-[#000000]/50
            shadow-[0_0_30px_rgba(255,244,214,0.15)]
            before:absolute before:inset-0 before:rounded-[40px] before:-z-10
            before:bg-gradient-to-tl before:from-[#000000]/20 before:to-transparent
            before:shadow-[inset_1px_1px_1px_rgba(255,244,214,0.75)];
    }
</style>
