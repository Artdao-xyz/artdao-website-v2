<script lang="ts">
    import { fly } from 'svelte/transition';
    import artDaoLogo from '$lib/assets/images/artdao-logo.webp';
    import { onMount } from 'svelte';
    import { scrambleText } from '../../../utils/textScramble';
    export let showInfo: boolean;

    let text1 = '';
    let text2 = '';

    function handleBackdropClick(event: MouseEvent) {
        // Only close if clicking the backdrop itself, not its children
        if (event.target === event.currentTarget) {
            showInfo = false;
        }
    }

    onMount(() => {
        const cleanText1 = scrambleText("Artists helping Artists", (newText: string) => {
            text1 = newText;
        });
        const cleanText2 = scrambleText("@ 2025", (newText: string) => {
            text2 = newText;
        });

        return () => {
            cleanText1();
            cleanText2();
        };
    });
</script>

<button 
    type="button"
    class="fixed w-dvw h-dvh z-50 backdrop-blur-2xl backdrop-brightness-50 flex flex-col items-center justify-center gap-4"
    transition:fly={{ duration: 300 }}
    on:click={handleBackdropClick}
>
    <img class="h-14" src={artDaoLogo} alt="ArtDao Logo">
    <div class="font-clash text-md font-medium leading-tight">
        <h3>{text1}</h3>
        <h3>{text2}</h3>
    </div>
    <div class="flex gap-2">
        <!-- <a target="_blank" href="https://discord.gg/NTUZRU3ZNE"><img class="h-10" src="media/home/icons/discord.png" alt="discord"></a> -->
        <a target="_blank" href="https://www.instagram.com/artdao.xyz"><img class="h-10" src="media/home/icons/instagram.png" alt="instagram"></a>
        <a target="_blank" href="https://x.com/Artdao_xyz"><img class="h-10" src="media/home/icons/twitter.png" alt="twitter"></a>
    </div>
</button>