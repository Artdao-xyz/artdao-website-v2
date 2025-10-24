<script lang="ts">
    import StudioProjects from '$lib/components/Studio/StudioProjects.svelte';
    import StudioController from '$lib/components/Studio/StudioController.svelte';
    import { studioProjects } from '../../data/Studio/studioProjects';
    import type { IStudioProject } from '../../data/Studio/studioProjects';
    import StudioHeader from '$lib/components/Studio/StudioHeader.svelte';
    import { ArrowUpRightIcon } from 'lucide-svelte';
    const projects : IStudioProject[] = studioProjects;
</script>

<StudioHeader/>

<StudioProjects/>
<StudioController/>

<div class="bg-black relative lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-full px-4 flex justify-between items-center gap-2 p-4">
        <a href="mailto:bertie@artdao.xyz" class="text-white font-bold font-robotoMono leading-snug tracking-wide space-x-1"><span>Get in touch</span><ArrowUpRightIcon class="w-4 h-4 inline-block" /></a>
        <span class="text-white text-[10px] font-normal font-robotoMono leading-3 tracking-tight">artdao © 2025</span>
</div>